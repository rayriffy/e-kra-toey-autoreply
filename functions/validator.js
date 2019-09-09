const _ = require('lodash')

const validRegex = /อีกระเทย/i
const invalidRegex = /มึงสิอีกระเทย/i

const validator = text => {
  const resValid = text.match(validRegex)
  const resInvalid = text.match(invalidRegex)

  console.log('>')
  console.log(JSON.stringify(resValid))
  console.log(JSON.stringify(resInvalid))

  return !_.isEmpty(resValid) && _.isEmpty(resInvalid)
}

module.exports = validator
