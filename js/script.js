const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 40) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})

const internalLinks = document.querySelectorAll('.navbar a[href^="#"]')

function scrollToSection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    const sectionTop = section.getBoundingClientRect().top
    const positionToScroll = sectionTop + window.scrollY - 100

    window.scroll({
        top: positionToScroll,
        behavior: 'smooth'
    })
}

internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 160) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
})

btnTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
})