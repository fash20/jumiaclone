const express  = require('express');
const cors = require('cors');
require('dotenv').config()
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const user = require('./routes/user');
const seller = require('./routes/seller')
const product = require('./routes/product')
const category = require('./routes/category')
const subcategory1 = require('./routes/subcategory1')
const subcategory2 = require('./routes/subcategory2')
const port = process.env.SERVER_PORT;
const CONN = process.env.CONNECTION;
const verifyToken  = require('./helpers/verify-token')
const auth = require('./helpers/jwt');
const errorHandelr = require('./helpers/errorHandler');

const app = express();


app.use(cors());
app.options('*', cors())
app.use(bodyparser.json())
app.use(morgan('tiny'))
// app.use(auth())
app.use(errorHandelr)
// app.use(verifyToken)



app.get('/', (req,res)=>{
    res.end('Server running')
})

app.use('/customer', user);
app.use('/seller', seller);
app.use('/category', category)
app.use('/product', product)
app.use('/subcategory1', subcategory1)
app.use('/subcategory2', subcategory2)
app.use('/public/upload', express.static(__dirname +'/public/upload'))

// mongoose.connect(CONN, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     dbName:'jclone'
// })
// .then(()=>console.log('Online Database Connected Successfully'))
// .catch(err=>console.log(err))

mongoose.connect(process.env.LOCAL_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName:'jclone'
})
.then(()=>console.log('Local Database Connected Successfully'))
.catch(err=>console.log(err))


app.listen(port,(req,res) => { 

    console.log('Port: '+port)

})