let hiddenComments;
let calcButtons = document.getElementsByClassName("numOps");
let equalButton = document.getElementById("equalButton");
let clearEntry = document.getElementById("clearEntry");
let clearInput = document.getElementById("clearInput");
let power = document.getElementById("power");
let powerOn = true;

const equal = (e) => {
  if (powerOn) {
    equation = document
      .getElementById("window-i")
      .innerText.replace(/\*/g, " * ")
      .replace(/\//g, " / ")
      .replace(/\%/g, " % ")
      .replace(/\+/g, " + ")
      .replace(/\-/g, " - ")
      .split(" ");
    console.log(`after text replace ${equation}`);
    for (let i = 0; i < equation.length; i++) {
      if (parseFloat(equation[i])) {
        console.log(equation[i]);
        equation[i] = parseFloat(equation[i]);
      }
    }
    console.log(equation);

    let equationMult = (equationArr) => {
      if (equationArr.includes("*")) {
        i = equationArr.indexOf("*");
        console.log(i);
        equationArr[i - 1] = equationArr[i - 1] * equationArr[i + 1];
        equationArr.splice(i, 2);
        if (equationArr.includes("*")) {
          console.log(equationArr);
          return equationMult(equationArr);
        }
      }
      console.log(equationArr);
      return equationArr;
    };
    let equationDivi = (equationArr) => {
      if (equationArr.includes("/")) {
        i = equationArr.indexOf("/");
        equationArr[i - 1] = equationArr[i - 1] / equationArr[i + 1];
        equationArr.splice(i, 2);
        if (equationArr.includes("/")) {
          console.log(equationArr);
          return equationDivi(equationArr);
        }
      }
      console.log(equationArr);
      return equationArr;
    };
    let equationModu = (equationArr) => {
      if (equationArr.includes("%")) {
        i = equationArr.indexOf("%");
        equationArr[i - 1] = equationArr[i - 1] % equationArr[i + 1];
        equationArr.splice(i, 2);
        if (equationArr.includes("%")) {
          console.log(equationArr);
          return equationModu(equationArr);
        }
      }
      console.log(equationArr);
      return equationArr;
    };
    let equationAdd = (equationArr) => {
      if (equationArr.includes("+")) {
        i = equationArr.indexOf("+");
        equationArr[i - 1] = equationArr[i - 1] + equationArr[i + 1];
        equationArr.splice(i, 2);
        if (equationArr.includes("+")) {
          console.log(equationArr);
          return equationAdd(equationArr);
        }
      }
      console.log(equationArr);
      return equationArr;
    };
    let equationSubt = (equationArr) => {
      if (equationArr.includes("-")) {
        i = equationArr.indexOf("-");
        equationArr[i - 1] = equationArr[i - 1] - equationArr[i + 1];
        equationArr.splice(i, 2);
        if (equationArr.includes("-")) {
          console.log(equationArr);
          return equationSubt(equationArr);
        }
      }
      console.log(equationArr);
      return equationArr;
    };
    equationSubt(
      equationAdd(equationModu(equationDivi(equationMult(equation))))
    );

    document.getElementById("window-i").innerText = equation;
  }
};

document.addEventListener("keydown", (e) => {
  if (powerOn) {
    switch (e.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "/":
      case "*":
      case "%":
      case "-":
      case "+":
        document.getElementById("window-i").textContent += e.key;
        break;
      case "c":
      case "C":
        document.getElementById("window-i").innerText = "";
        break;
      case "Backspace":
        document.getElementById("window-i").innerText = document
          .getElementById("window-i")
          .innerText.slice(0, -1);
        break;
      case "Enter":
        equal();
        break;
    }
  }
  if (e.key == "Escape") {
    powerFunc();
  }
});

const powerFunc = () => {
  powerOn = !powerOn;
  if (powerOn) {
    document.getElementById("window-i").style.visibility = "";
  } else {
    document.getElementById("window-i").style.visibility = "hidden";
    // document.getElementById("window-i").style.display = "hidden";
  }
};

const click = (e) => {
  if (powerOn) {
    document.getElementById("window-i").textContent += e.target.innerText;
    console.log(`Triggered ${e.target.innerText}`);
  }
};
for (let i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener("click", click);
}
power.addEventListener("click", powerFunc);
clearEntry.addEventListener("click", (e) => {
  if (powerOn) {
    document.getElementById("window-i").innerText = document
      .getElementById("window-i")
      .innerText.slice(0, -1);
  }
});
clearInput.addEventListener("click", (e) => {
  if (powerOn) {
    document.getElementById("window-i").innerText = "";
  }
});
equalButton.addEventListener("click", equal);
//   try {
// let equation = [];
