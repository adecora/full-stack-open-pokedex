const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Simple endpoint for doing an application health check
app.get('/health', (req, res) => {
  res.send('ok')
})

// Dummy endpoint to ensure the deployed version
app.get('/version', (req, res) => {
  res.send('1')  // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
