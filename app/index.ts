import express from "express";
import bodyParser from "body-parser";
import path from "path";
var cors = require('cors')
require("dotenv").config({ path: path.basename("../.env") });

import Authenticate from "./controllers/middleware/authentication";
import SignIn from "./modues/user/permissions/createtoken";

const { NODE_PORT } = process.env;

const app:  express.Application = express();

app.use(bodyParser.json());
app.use(cors());

 app.post("/api/monitoring/sessioncheck", Authenticate, function(req: any, res: any){
   var successresult = {
         isLogin: true
   };

   res.send(successresult);
 });

 app.post('/api/monitoring/validateuser', async function(req: any, res: any){

    
    res.send(await SignIn(req.body));
 });


 app.listen(NODE_PORT, function(){
     console.log(`Inititing app at port ${NODE_PORT}!`);
 })