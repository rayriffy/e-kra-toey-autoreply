const _ = require('lodash')
const axios = require('axios')
const express = require('express')

const validator = require('../functions/validator')

const router = express.Router()

const {LINE_TOKEN = 'SOMEKEY'} = process.env

const LINE_API_URL = 'https://api.line.me/v2/bot/message'

const REQUEST_HEADER = {
  Authorization: `Bearer ${LINE_TOKEN}`,
}

router.post('/', async (req, res) => {
  if (req.body.events[0].message.type !== 'text') {
    return
  }

  const text = req.body.events[0].message.text
  const validate = validator(text)

  if (validate) {
    // Have e kra toey
    const payload = {
      replyToken: req.body.events[0].replyToken,
      messages: [
        {
          type: 'text',
          text: 'มึงสิอีกระเทย',
        },
      ],
    }

    const options = {
      headers: REQUEST_HEADER,
    }

    return axios.post(`${LINE_API_URL}/reply`, payload, options)
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
