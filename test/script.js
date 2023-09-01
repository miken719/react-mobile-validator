const validateNumber = require("react-mobile-validator");
const countryCode = "IN";
const mobileNumber = "8854222533";
/******************* 
  @Purpose : Validate Mobile number with countrycode
  @Parameter : countryCode, mobileNumber
  @Author : Miken
  ******************/
const isValid = validateNumber(countryCode, mobileNumber);

console.log(isValid); // Output: true or false
