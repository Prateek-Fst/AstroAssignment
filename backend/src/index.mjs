import express from 'express';
import mongoose from 'mongoose';
import sroute from './routes/sroutes.mjs';
import groute from './routes/groute.mjs';

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/".then(()=> console.log("Database connected")))
.catch((err) => console.log(err.message));

app.use('/g', groute);
app.use('/s', sroute);

app.listen(8000, ()=>console.log("Server started on port",8000));