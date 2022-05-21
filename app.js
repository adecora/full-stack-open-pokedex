const express = require('express')
const app = express()
const healthRouter = require('./controllers/health')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// End points to ensure our application health
app.use('/', healthRouter)

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
