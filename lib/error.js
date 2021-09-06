const ERROR_NAME = 'V4EX_API_AUTHENTICATION_ERROR'
const MODULE_NAME = 'V4EX_API_AUTHENTICATION'

const ERRORS = {
  REGISTER_DUPLICATE_USERNAME: 11001,
}

class CustomError extends Error {
  constructor(code, message) {
    super(message)
    this.name = ERROR_NAME
    this.code = code
    this.codeName = Object.keys(ERRORS).find(key => ERRORS[key] === code)
    this.module = MODULE_NAME
    this.category = this.codeName.split('_')[0]
  }
}

const errors = {
  [ERRORS.REGISTER_DUPLICATE_USERNAME]: (username) => {
    return new CustomError(ERRORS.REGISTER_DUPLICATE_USERNAME, `Duplicate username "${username}".`)
  }
}


module.exports = {
  CustomError,
  ERRORS,
  errors
}
