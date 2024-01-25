const length = document.getElementById("range");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const displayPassword = document.getElementById("password");

function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  // combine all and create a single variable
  let allChars = lowercase;
  if (uppercaseCheckbox.checked) allChars += uppercase;
  if (numbersCheckbox.checked) allChars += number;
  if (symbolsCheckbox.checked) allChars += symbol;

  // Get password according to the length
  let password = "";
  for (let i = 0; i < length.value; i++) {
    const random = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(random);
  }

  // Display the password
  document.getElementById("password").innerText = password;
}

// show changed value of range
length.addEventListener("input", function () {
  document.getElementById("value").innerHTML = length.value;
});

// copy text
displayPassword.addEventListener("click", () => {
  if (displayPassword.value !== "") {
    navigator.clipboard
      .writeText(displayPassword.value)
      .then(() => {
        displayPassword.classList.add("copied");
        displayPassword.innerHTML = "Copied...";
        setTimeout(() => {
          displayPassword.classList.remove("copied");
          displayPassword.innerHTML = "";
        }, 2000);
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard", error);
      });
  }
});
