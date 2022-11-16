const conventer = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const fahrenheit = "°F";
const celsius = "°C";
let isCelToF = true;

const showResult = (value) => {
	if (conventer.value === "") conventer.value = 0;
	if (isCelToF)
		result.textContent =
			conventer.value + celsius + " to " + value.toFixed(1) + fahrenheit;
	else
		result.textContent =
			conventer.value + fahrenheit + " to " + value.toFixed(1) + celsius;
	conventer.value = "";
};

const convert = () => {
	if (isCelToF) showResult(conventer.value * 1.8 + 32);
	else showResult((conventer.value - 32) / 1.8);
};

const changeScale = () => {
	if (isCelToF) {
		one.textContent = fahrenheit;
		two.textContent = celsius;
		isCelToF = false;
	} else {
		one.textContent = celsius;
		two.textContent = fahrenheit;
		isCelToF = true;
	}
	reset();
};
const reset = () => {
	conventer.value = "";
	result.textContent = "";
};

convBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", changeScale);
