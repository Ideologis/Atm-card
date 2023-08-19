
const form = document.getElementById("input-submit");
const error = document.querySelector(".name input");
const numbsError = document.querySelector(".number input");
const numbError = document.querySelector(".cvc input");
const cardINput = document.getElementById("name");
const userPin = document.getElementById("user");
const cardView = document.querySelector(".card_name");
const cardNumber = document.querySelector(".card_num");
const cvc = document.querySelector(".cvc input");
const backNum = document.querySelector(".back-num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const exp = document.querySelector(".card_exp");




  cardINput.addEventListener("keyup", function () {
    if (/\d+/g.test(cardINput.value)) {
      error.classList.add("error");
      // alert("Number are not needed");
    } else {
      cardView.innerHTML = cardINput.value;
      error.classList.remove("error");
    }
  });

  userPin.addEventListener("keyup", function () {
    if (userPin.value !== "" && !/^[0-9]+$/g.test(userPin.value)) {
      numbsError.classList.add("error");
      // alert("Number are not needed");
    } else {
      const pin = userPin.value;
      const cardpin = pin.replace(/(\d{4})(?=\d)/g, "$1 ");
      cardNumber.innerHTML = cardpin;
      numbsError.classList.remove("error");
    }
  });

  cvc.addEventListener("keyup", function () {
    if (cvc.value !== "" && !/^[0-9]+$/g.test(cvc.value)) {
      numbError.classList.add("error");
      // alert("Number are not needed");
    } else {
      backNum.innerHTML = cvc.value;
      numbError.classList.remove("error");
    }
  });

  month.addEventListener("keyup", expiry);
  year.addEventListener("keyup", expiry);

  function expiry() {
    if (/^[0-9]+$/g.test(month.value) && /^[0-9]+$/g.test(year.value)) {
      let months = month.value.padStart(2, "0");
      let years = year.value.padStart(2, "0");
      exp.innerHTML = `${months} / ${years}`;
    }
  }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   handleEvent();
// });