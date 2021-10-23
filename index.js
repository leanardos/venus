const PORT = 8080
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import fetch from 'node-fetch'

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//get all payment
app.get('/payments', (req, res) => {
    const keyspace = 'app'
    const collection = 'payments'
    const pageSize = 20
    const url = `https://ffaa2b9e-762d-4f3b-ac64-176baa4abd48-westeurope.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/${collection}?page-size=${pageSize}`
    const token = 'AstraCS:TzWhzdlyeXFoydGQyuEeEXpP:49b0d7695ce1f315c23e0a75c9189e9816d4577f057b8a335221c7790bec87a1'

    const params = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token': token
        }
    }

    fetch(url, params)
        .then(fetchRes => fetchRes.json())
        .then(json => res.json(json))
        .catch(err => console.log('error: ' + err))
})



//get one account


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))