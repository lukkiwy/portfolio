if (window.matchMedia("(min-width: 1025px)").matches) {
	
	const pics = document.querySelectorAll(".pic");

	pics.forEach(pic => {
		const number = pic.id.replace("pic", "");

		pic.addEventListener("mouseenter", () => {
			document.getElementById(`desc${number}`).style.display = "block";
		});

		pic.addEventListener("click", () => {
			document.getElementById(`fullpic${number}`).style.display = "block";
			document.getElementById("bg").style.display = "block";
			document.getElementById("prevpic").style.display = "block";
			document.getElementById("nextpic").style.display = "block";
			document.getElementById(`fullpic${number}`).classList.add("openedpic");
		});

		pic.addEventListener("mouseleave", () => {
			document.getElementById(`desc${number}`).style.display = "none";
		});
	});

	const prevpic = document.getElementById("prevpic");
	const nextpic = document.getElementById("nextpic");

	prevpic.addEventListener("click", () => {
		let openednum = +document.querySelector(".openedpic").id.replace("fullpic", "");
		document.getElementById(`fullpic${openednum}`).classList.remove("openedpic");
		document.getElementById(`fullpic${openednum}`).style.display = "none";
		if (openednum === 1) {
			openednum = 6;
		} else {
			openednum -= 1;
		}
		document.getElementById(`fullpic${openednum}`).classList.add("openedpic");
		document.getElementById(`fullpic${openednum}`).style.display = "block";
	});

	nextpic.addEventListener("click", () => {
		let openednum = +document.querySelector(".openedpic").id.replace("fullpic", "");
		document.getElementById(`fullpic${openednum}`).classList.remove("openedpic");
		document.getElementById(`fullpic${openednum}`).style.display = "none";
		if (openednum === 6) {
			openednum = 1;
		} else {
			openednum += 1;
		}
		document.getElementById(`fullpic${openednum}`).classList.add("openedpic");
		document.getElementById(`fullpic${openednum}`).style.display = "block";
	});

	const bg = document.getElementById("bg");

	bg.addEventListener("click", () => {
		bg.style.display = "none";
		const opened = document.querySelector(".openedpic");
		opened.style.display = "none";
		opened.classList.remove("openedpic");
		prevpic.style.display = "none";
		nextpic.style.display = "none";
	});
  console.log("Широкий экран");
} else {
	const prevpicm = document.getElementById("prevpicm");
	const nextpicm = document.getElementById("nextpicm");
	
	let num = 1;
	
	prevpicm.addEventListener("click", () => {
		if (num == 1) {
			document.getElementById(`pic${num}`).style.display = "none";
			document.getElementById(`desc${num}`).style.display = "none";
			num = 6;
			document.getElementById(`pic${num}`).style.display = "block";
			document.getElementById(`desc${num}`).style.display = "block";
		} else {
			document.getElementById(`pic${num}`).style.display = "none";
			document.getElementById(`desc${num}`).style.display = "none";
			num -= 1;
			document.getElementById(`pic${num}`).style.display = "block";
			document.getElementById(`desc${num}`).style.display = "block";
		};
		
	});
	
	nextpicm.addEventListener("click", () => {
		console.log("1");
		if (num == 6) {
			document.getElementById(`pic${num}`).style.display = "none";
			document.getElementById(`desc${num}`).style.display = "none";
			num = 1;
			document.getElementById(`pic${num}`).style.display = "block";
			document.getElementById(`desc${num}`).style.display = "block";
		} else {
			document.getElementById(`pic${num}`).style.display = "none";
			document.getElementById(`desc${num}`).style.display = "none";
			num += 1;
			document.getElementById(`pic${num}`).style.display = "block";
			document.getElementById(`desc${num}`).style.display = "block";
		};
		
	});
	
  console.log("Другой экран");
}
