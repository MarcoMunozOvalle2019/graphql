import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'
import mongoose from "mongoose"
import cors from "cors"


const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(cors())
mongoose.connect(`mongodb://localhost:27017/graphql`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 5000 
  })
  .then(() => console.log('Mongo Connectado, listo!'))
  .catch(err => {
     console.log('MongoDB Conneccion Error: ${err.message}');
  });

app.get('/', (req,res)=>{
 res.json({
     mensaje:'hola'
 })
})
app.post('/', function(req, res) {
  res.json({
    mensaje:'hola'
})
});



app.use('/graphql', graphqlHTTP({
     graphiql: true,
     schema: schema,
     context:{
         messageId:'test'
     }
 }))
 
app.listen(3000,()=>console.log('servidor arriba en port 3000'))