const router =  require('express').Router()

// Simple endpoint for doing an application health check
router.get('/health', (req, res) => {
  res.send('ok')
})

// Dummy endpoint to ensure the deployed version
router.get('/version', (req, res) => {
  res.send('1')  // change this string to ensure a new version deployed
})

module.exports = router