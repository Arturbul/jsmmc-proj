const item1 = document.querySelector(".item1");
const arrowIcon = document.querySelector(".fas");
const arrowBtn = document.querySelector(".arrow");

// let isRotated = false;
// let deg;
// const rotate = () => {
// 	if (isRotated) {
// 		deg = 0;
// 		isRotated = false;
// 	} else {
// 		deg = 180;
// 		isRotated = true;
// 	}
// 	return `rotate(${deg}deg)`;
// };
// const handleClick = () => {
// 	item1.classList.toggle("hide");
// 	arrowIcon.style.transform = rotate();
// };

const showImg = () => {
	item1.classList.toggle("hide");
	if (item1.classList.contains("hide"))
		arrowIcon.style.transform = "rotate(180deg)";
	else arrowIcon.style.transform = "rotate(0)";
};

arrowBtn.addEventListener("click", showImg);
