const { phonesRegex, REQUIRED_CODE, INVALID_CODE } = require("./utils");
/******************* 
  @Purpose : Validate Mobile number with countrycode
  @Parameter : code
  @Author : Miken
  ******************/
function validateNumber(code = "") {
  let countryCode = code.toUpperCase();
  if (!phonesRegex[countryCode]) {
    return INVALID_CODE;
  } else if (!countryCode) {
    return REQUIRED_CODE;
  } else {
    console.log(phonesRegex[countryCode]);
    return phonesRegex[countryCode];
  }
}
module.exports = validateNumber;
