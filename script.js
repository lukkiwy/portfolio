if (window.matchMedia("(max-width: 1024px)").matches) {
	
	const projects = document.querySelectorAll(".project");

	const projectObserverm = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			const link = document.querySelector(`#img${id[1]}`);

			if (entry.isIntersecting) {
				link.src = link.dataset.hover;
			} else {
				link.src = link.dataset.orig;
			}
		});
	}, {
		threshold: 1,
	});
	
	projects.forEach(project => projectObserverm.observe(project));
	
	const menuLinks = document.querySelectorAll("#menu a");
	const projectObserver = new IntersectionObserver((entries) => {
	let anyVisible = false;

	entries.forEach(entry => {
		const id = entry.target.getAttribute("id");
		const link = document.querySelector(`#link-${id}`);

		if (entry.isIntersecting) {
			anyVisible = true;
			menuLinks.forEach(li => li.classList.remove("active"));
			if (link) link.classList.add("active");
		}
	});

	if (!anyVisible) {
		menuLinks.forEach(li => li.classList.remove("active"));
	}
	}, {
	  threshold: 1,
	});

	projects.forEach(project => projectObserver.observe(project));
	
	const imgs = document.querySelectorAll(".img");
	imgs.forEach(img => {
		img.addEventListener("click", () => {
			window.location.href = `projects/project${img.id[3]}.html`;
		});
	});
	
} else {
	
	const imgs = document.querySelectorAll(".img");
	imgs.forEach(img => {

		img.addEventListener("mouseenter", () => {
			img.src = img.dataset.hover;
		});

		img.addEventListener("click", () => {
			window.location.href = `projects/project${img.dataset.hover[10]}.html`;
		});

		img.addEventListener("mouseleave", () => {
			img.src = img.dataset.orig;
		});
	});
	
	const projects = document.querySelectorAll(".project");
	const menuLinks = document.querySelectorAll("#menu a");

	const projectObserver = new IntersectionObserver((entries) => {
	let anyVisible = false;

	entries.forEach(entry => {
		const id = entry.target.getAttribute("id");
		const link = document.querySelector(`#link-${id}`);

		if (entry.isIntersecting) {
			anyVisible = true;
			menuLinks.forEach(li => li.classList.remove("active"));
			if (link) link.classList.add("active");
		}
	});

	if (!anyVisible) {
		menuLinks.forEach(li => li.classList.remove("active"));
	}
	}, {
	  threshold: 0.7,
	});

	projects.forEach(project => projectObserver.observe(project));
}

const projectPage = document.getElementById("project-page");
const menu = document.getElementById("menu");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menu.classList.add('fixed');
      menu.id = "menu-new";
    } else {
	  menu.id = "menu";
    }
  });
}, {
  threshold: 0.01,
});

observer.observe(projectPage);


