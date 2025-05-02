require('dotenv').config();
const express = require('express');

const { serverConfig } =require('./config');
const apiRoutes = require('./routes');
const Logger = require('./config/logger-config');

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(serverConfig.PORT,() => {
    console.log(`successfully started the server on PORT : ${serverConfig.PORT}`);
    Logger.info("successfully started the server",{});
});