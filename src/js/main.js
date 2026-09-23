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