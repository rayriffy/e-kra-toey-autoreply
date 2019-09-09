const _ = require('lodash')

const validRegex = /อีกระเทย/i
const invalidRegex = /มึงสิอีกระเทย/i

const validator = text => {
  const resValid = text.match(validRegex)
  const resInvalid = text.match(invalidRegex)

  return !_.isEmpty(resValid) && _.isEmpty(resInvalid)
}

module.exports = validator
