import postalCodes from "postal-codes-js";

export function formatCurrency(amount) {
  // Ensure amount is a number
  //   if (typeof amount !== "number") {
  //     return "Invalid amount";
  //   }

  // Format as US dollars
  return Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function validateFullName(fullName) {
  // console.log("we are going to validate name");

  // Check if the name is empty
  if (!fullName.trim()) {
    return false;
  }

  // Regular expression to match names (letters and spaces only, no leading/trailing spaces)
  var nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

  // Check if the name matches the regular expression
  if (!nameRegex.test(fullName.trim())) {
    return false;
  }

  // Check if the name contains at least two words
  var nameParts = fullName.trim().split(/\s+/);
  if (nameParts.length < 2) {
    return false;
  }

  return true;
}

export function validateEmail(email) {
  // Regular expression to match a valid email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

export function isNotEmpty(value) {
  return value.trim().length !== 0;
}
