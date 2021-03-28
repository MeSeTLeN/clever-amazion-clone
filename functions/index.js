const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51IZg4pE8ZNwsFY8IQmzvIY5S1BTV4yoJ1T45pVxYPbk59HgJBBWbyzcLmaO2kjSTNkcXCTQwlUuZyHTqTGQaj8dd00QUVbCjTy'
)

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request Recieved! for this amount >>>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: 'usd',
  })

  //   OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-b94c2/us-central1/api
