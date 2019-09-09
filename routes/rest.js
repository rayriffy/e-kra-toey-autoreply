const _ = require('lodash')
const express = require('express')

const validator = require('../functions/validator')

const router = express.Router()

router.post('/', async (req, res) => {
  const {text = ''} = req.body
  const validate = validator(text)

  if (validate) {
    return res.status(200).send({
      status: 'success',
      code: 201,
      response: {
        message: 'มึงสิอีกระเทย'
      }
    })
  } else {
    return res.status(400).send({
      status: 'success',
      code: 401,
      response: {
        message: 'no matches'
      }
    })
  }
})

router.all('/', (req, res) => {
  res.status(405).send({
    status: 'failure',
    code: 705,
    response: {
      message: 'invalid method',
    },
  })
})

module.exports = router
