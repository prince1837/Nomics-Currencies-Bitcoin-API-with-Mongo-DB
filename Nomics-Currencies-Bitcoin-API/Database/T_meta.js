
var mongoes=require('mongoose')
mongoes.connect('mongodb://localhost:27017/BitCoinDB',{ useUnifiedTopology: true, useNewUrlParser: true, });
var db = mongoes.connection;
if (!db){
    console.log("error in Db creating");
    
}
var table=mongoes.Schema
var my_data=mongoes.model('my_data',new table({"curriences_data":Object}),"Bitcoin_metaData")

module.exports=my_data,mongoes
