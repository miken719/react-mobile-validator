const {
  phonesRegex,
  REQUIRED_CODE,
  INVALID_CODE,
  REQUIRED_MOBILE_NUMBER,
  COUNTRY_TYPE_VALIDATION,
  MOBILE_TYPE_VALIDATION,
} = require("./utils");
/******************* 
  @Purpose : Validate Mobile number with countrycode
  @Parameter : code, mobileNumber
  @Author : react-mobile-validator
  ******************/
function validateNumber(code, mobileNumber) {
  if (typeof code !== "string") {
    console.error(COUNTRY_TYPE_VALIDATION);
  } else if (typeof mobileNumber !== "string") {
    console.error(MOBILE_TYPE_VALIDATION);
  } else {
    let countryCode = code?.toUpperCase();
    switch (true) {
      case !phonesRegex[countryCode]:
        console.log(INVALID_CODE);
        break;
      case !countryCode:
        console.log(REQUIRED_CODE);
        break;
      case !mobileNumber:
        console.log(REQUIRED_MOBILE_NUMBER);
        break;
      default:
        const isValid = new RegExp(phonesRegex[countryCode]).test(mobileNumber);
        return isValid;
    }
  }
}

module.exports = validateNumber;
