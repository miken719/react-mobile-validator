const {
  phonesRegex,
  REQUIRED_CODE,
  INVALID_CODE,
  REQUIRED_MOBILE_NUMBER,
} = require("./utils");
/******************* 
  @Purpose : Validate Mobile number with countrycode
  @Parameter : code
  @Author : Miken
  ******************/
function validateNumber(code, mobileNumber) {
  let countryCode = code.toUpperCase();
  if (!phonesRegex[countryCode]) {
    return console.log(INVALID_CODE);
  } else if (!countryCode) {
    return console.log(REQUIRED_CODE);
  } else if (!mobileNumber) {
    return console.log(REQUIRED_MOBILE_NUMBER);
  } else {
    const isValid = new RegExp(phonesRegex[countryCode]).test(mobileNumber);
    return isValid;
  }
}
module.exports = validateNumber;
