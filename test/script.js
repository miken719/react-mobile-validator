const validateNumber = require("react-mobile-validator");
const countryCode = "IN";
const mobileNumber = "8811122232";
/******************* 
  @Purpose : Validate Mobile number with countrycode
  @Parameter : countryCode, mobileNumber
  @Author : react-mobile-validator
  ******************/
const isValid = validateNumber(countryCode, mobileNumber);

console.log(isValid); // Output: true or false
