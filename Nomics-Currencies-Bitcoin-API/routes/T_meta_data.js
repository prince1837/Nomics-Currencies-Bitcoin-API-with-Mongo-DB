module.exports=(T_M_data,axios,my_data)=>{
    T_M_data.get('/data_insert',(req,res)=>{
        axios.get('https://api.nomics.com/v1/currencies/ticker?key=f18f5cd0afd42cbfd6f6359510d62ebc')
        .then((data)=>{
            var total_data= new my_data({'curriences_data':data.data})
            total_data.save(function (err,data) {
                if (err) return console.error(err);
                console.log("Data saved to bookstore collection.");
                res.send({'status':"Data saved to bookstore collection."})
              });            
        }).catch((err)=>{
            res.send(err.message)
        })
    })
    T_M_data.get('/data_get',(req,res)=>{
        my_data.find({},function(err,data){
        if(err){
            res.send(err.message)
            console.log(err.message)
        }else{
            res.send(data)
            console.log(data)
        }
        })
    })
    T_M_data.get('/data_get_filter',(req,res)=>{
        my_data.find({},function(err,data){
            if (!err) {
                let currencies_list = []
                for (var currencies_dict of data[0].curriences_data) {
                    currencies_list.push({"currency":currencies_dict.currency,
                    "symbol":currencies_dict.symbol,"name":currencies_dict.name,"logo_url":currencies_dict.logo_url,
                    "rank":currencies_dict.rank,"price":currencies_dict.price,"price_date":currencies_dict.price_date,
                    "market_cap":currencies_dict.market_cap,"circulating_supply":currencies_dict.circulating_supply,
                    "max_supply":currencies_dict.max_supply,"high":currencies_dict.high,"high_timestamp":currencies_dict.high_timestamp})
                }
                res.send(currencies_list)
            } else {
                console.log(err.message);
            }
        })
    })

    T_M_data.get('/data_get_filter/:data',(req,res)=>{
        var filter_data=req.params.data
        my_data.find({},function(err,data){
            if (!err) {
                let currencies_list = []
                for (var currencies_dict of data[0].curriences_data) {
                    currencies_list.push(currencies_dict[filter_data])
                }
                res.send(currencies_list)
            } else {
                console.log(err.message);
            }
        })
    })


}
