const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const color = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 36;
console.log(fontSize);
const increase = () => {
	if (fontSize < 80) {
		fontSize += 2;
		p.style.fontSize = fontSize + "px";
	}
};
const decrease = () => {
	if (fontSize > 10) {
		fontSize -= 2;
		p.style.fontSize = fontSize + "px";
	}
};

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	p.style.color = `rgb(${r},${g},${b})`;
};
sizeUp.addEventListener("click", increase);
sizeDown.addEventListener("click", decrease);
color.addEventListener("click", colorChanger);
