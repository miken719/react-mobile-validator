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
const isValid = new RegExp(validateNumber("IN")).test("123456");
console.log(isValid); // true or false
```

The `validateMobileNumber` function takes two arguments: the mobile number as a string and the ISO 3166-1 alpha-2 country code (e.g., 'US' for the United States, 'IN' for India).

## Example

Here's a basic example of integrating **react-mobile-validator** into a React component:

```javascript
import React, { useState } from "react";
import { validateMobileNumber } from "react-mobile-validator";

function MobileInput() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const newNumber = event.target.value;
    setMobileNumber(newNumber);

    const countryCode = "US"; // Set the appropriate country code here
    const isValidNumber = new RegExp(validateNumber("IN")).test("123456");
    setIsValid(isValidNumber);
  };

  return (
    <div>
      <input type="text" value={mobileNumber} onChange={handleInputChange} />
      <p>{isValid ? "Valid" : "Invalid"} mobile number</p>
    </div>
  );
}

export default MobileInput;
```

## Conclusion

With **react-mobile-validator**, you can seamlessly integrate mobile number validation into your React applications, ensuring that users provide correctly formatted mobile numbers for their respective countries. This package simplifies the validation process and enhances the overall user experience of your application's forms and input interfaces.

Feel free to explore the package's functions and customize them according to your application's needs. For more information, refer to the [GitHub repository](https://github.com/your-username/react-mobile-validator) of the project.

If you encounter any issues or have suggestions for improvements, please don't hesitate to contribute by submitting issues or pull requests to the repository. Happy coding! 🚀
