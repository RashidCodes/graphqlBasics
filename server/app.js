const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')


// convention for express-graphql
const graphqlHTTP = require('express-graphql')

// graphql schema
const schema = require('./schema/schema')
const app = express()
const port = 4000;

// connect to mongo
mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(!err) console.log('successfully connected to books_authors')
})

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`)
})

// allow cross origin requests
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))