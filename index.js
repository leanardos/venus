const PORT = 8080
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
const keyspace = 'app'
const pageSize = 20
const baseUrl = `https://ffaa2b9e-762d-4f3b-ac64-176baa4abd48-westeurope.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections`

const getParams = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'X-Cassandra-Token': process.env.ASTRA_TOKEN
    }
}

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//get all payment
app.get('/payments', (req, res) => {
    const collectionName = 'payments'
    const url = `${baseUrl}/${collectionName}?page-size=${pageSize}`

    fetch(url, getParams)
        .then(fetchRes => fetchRes.json())
        .then(json => res.json(json))
        .catch(err => console.log('error: ' + err))
})



//get one account
app.get('/accounts/:id', (req, res) => {
    const collectionName = 'accounts'
    const id = req.params.id
    const url = `${baseUrl}/${collectionName}/${id}`

    fetch(url, getParams)
        .then(fetchRes => fetchRes.json())
        .then(json => res.json(json))
        .catch(error => console.log('error: ' + err))

})


//Middleware for errors
function notFound(req, res, next) {
    res.status(404)
    const error = new Error('Not Found')
    next(error)
}

function errorHandler(error, req, res) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))