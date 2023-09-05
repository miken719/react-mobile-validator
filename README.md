# React Mobile Validator

**react-mobile-validator** is a lightweight and user-friendly npm package that simplifies the process of validating mobile numbers based on their respective country codes. This package provides a set of utility functions that can be seamlessly integrated into your React applications to ensure that mobile numbers provided by users are correctly formatted and valid for the selected country.

Validating mobile numbers can be a cumbersome task, especially when dealing with different country codes and formats. With **react-mobile-validator**, you can effortlessly incorporate mobile number validation into your application's forms and user interfaces, enhancing the overall user experience.

## Installation

You can install the package using npm:

```bash
npm install react-mobile-validator
```

or using yarn:

```bash
yarn add react-mobile-validator
```

## Usage

To get started with **react-mobile-validator**, follow these simple steps:

1. **Import the necessary functions:**

```javascript
import validateMobileNumber from "react-mobile-validator";
```

2. **Validate a mobile number:**

```javascript
const isValidNumber = validateMobileNumber(countryCode, newNumber);
//e.g countryCode = "IN";  newNumber = "885XXXXXXX";

console.log(isValid); // true or false
```

The `validateMobileNumber` function takes two arguments: the mobile number as a string and the ISO 3166-1 alpha-2 country code (e.g., 'US' for the United States, 'IN' for India).

## Example

Here's a basic example of integrating **react-mobile-validator** into a React component:

```javascript
import React, { useState } from "react";
import validateMobileNumber from "react-mobile-validator";
import countryCodeList from "./countryCodes.json";
function App() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleInputChange = (event) => {
    const newNumber = event.target.value;
    setMobileNumber(newNumber);
    const isValidNumber = validateMobileNumber(countryCode, newNumber);
    if (isValidNumber) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div>
      <label htmlFor="country">Choose a country:</label>
      <select
        id="country"
        name="countryName"
        onChange={(e) => setCountryCode(e.target.value)}
      >
        {Object.values(countryCodeList)?.map((country) => {
          return (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          );
        })}
      </select>
      <label htmlFor="mobile">Enter MobileNumber:</label>
      <input
        type="text"
        id="mobile"
        name="mobileName"
        value={mobileNumber}
        onChange={handleInputChange}
      />
      <p>{isValid ? "Valid" : "Invalid"} mobile number</p>
    </div>
  );
}

export default App;
```

## Conclusion

With **react-mobile-validator**, you can seamlessly integrate mobile number validation into your React applications, ensuring that users provide correctly formatted mobile numbers for their respective countries. This package simplifies the validation process and enhances the overall user experience of your application's forms and input interfaces.

Feel free to explore the package's functions and customize them according to your application's needs. For more information, refer to the [GitHub repository](https://github.com/mikenindianic/react-mobile-validator) of the project.

If you encounter any issues or have suggestions for improvements, please don't hesitate to contribute by submitting issues or pull requests to the repository. Happy coding! 🚀
