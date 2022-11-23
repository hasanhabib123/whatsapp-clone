import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "https://whatsappapplication.onrender.com", credentials: true }));
app.use('/', Routes);

// //step 3: Heroku

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static("client/build"));
//     app.get("*",(request,response)=>{
//         response.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
//     })
// }

const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URL = process.env.MONGODB_URI ||  `mongodb://${USERNAME}:${PASSWORD}@ac-a9ethwz-shard-00-00.dktfw8j.mongodb.net:27017,ac-a9ethwz-shard-00-01.dktfw8j.mongodb.net:27017,ac-a9ethwz-shard-00-02.dktfw8j.mongodb.net:27017/WhatsApp?ssl=true&replicaSet=atlas-13tbbd-shard-0&authSource=admin&retryWrites=true&w=majority`;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
Connection(URL);

