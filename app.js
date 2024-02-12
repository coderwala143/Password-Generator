// const pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const specialSet = "~!@#$%^&*()_+=/";

const allSet =
  "QWERTYUIOPASDFGHJKLZXCVBNMasdfghjklqwertyuiopzxcvbnm1234567890!@#$%^&*()-=+";

let inputLength = document.querySelector("#length");

let inputOption = document.querySelectorAll("#option");
function getrandom(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePass(password = "") {
  if (inputLength.value < 0) {
    return "Choose Positive Number";
  }
  if (
    inputOption[0].checked == false &&
    inputOption[1].checked == false &&
    inputOption[2].checked == false &&
    inputOption[3].checked == false
  ) {
    password += getrandom(allSet);
  }

  if (inputOption[0].checked) {
    password += getrandom(upperSet);
  }

  if (inputOption[1].checked) {
    password += getrandom(lowerSet);
  }

  if (inputOption[2].checked) {
    password += getrandom(numberSet);
  }

  if (inputOption[3].checked) {
    password += getrandom(specialSet);
  }

  if (password.length < inputLength.value) {
    return generatePass(password);
  }

  return truncateString(password, inputLength.value);
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let getpass = generatePass();
  document.querySelector(".mainInput").value = getpass;
});

function truncateString(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
