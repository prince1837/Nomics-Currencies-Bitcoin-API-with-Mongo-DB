# Nomics-Currencies-Bitcoin-API-with-Mongo-DB
In this project I fetched data from Nomics Crypto currencies-Bitcoin-API and stored the data in Mongo database. for this API I used the Express framework of NodeJS, Mongoose query builder and Axios which is a promise-based HTTP client that works both in the browser and in a node.js environment.

### Requirements
If you're using Linux-based OS, install the latest version of Nodejs and npm, by typing the following commands on your terminal.

    sudo apt update
    sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl

##### Then, for the Latest release (version 13.9.0), add this PPA, by typing the following command on your terminal

    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt install nodejs

#####  Now, you need to install necessary dependencies using npm (node-package-manager), open your termial, and first type
#####  npm init to initialize package.json file. Then, type

       npm install express
       npm install mongoose
       npm install axios
##### Next, you've to install mongodb into your system. For this, write these following commands on your terminal.

       sudo apt-get update
       sudo apt-get install mongodb
       sudo apt-get update
       sudo service start mongod
       
