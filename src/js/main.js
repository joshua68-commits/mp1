/* Your JS here. */
console.log('Hello World!')

const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
    }

    let currentSection = "";
    const navbarHeight = navbar.offsetHeight;

    sections.forEach((section) =>{
        const sectionTop = section.offsetTop;

        if(window.scrollY + navbarHeight + 1 >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link)=>{
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });

        const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

    if (atBottom) {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

        navLinks[navLinks.length - 1].classList.add("active");
    }
}

window.addEventListener("scroll", handleScroll);

handleScroll();


const slides = document.querySelectorAll(".slide");

const previousButton =
    document.getElementById("previous-slide");

const nextButton =
    document.getElementById("next-slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

previousButton.addEventListener("click", () => {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(currentSlide);
});

const modal = document.getElementById("modal");

const openModalButton =
    document.getElementById("open-modal");

const closeModalButton =
    document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.classList.add("visible");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("visible");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("visible");
    }
});