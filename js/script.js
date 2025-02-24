const navbar = document.querySelector(".navbar");

// Alterna a classe "active" na navbar com base na posição do scroll
window.addEventListener("scroll", () => {
    if(window.scrollY > 40) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})

const internalLinks = document.querySelectorAll('.navbar a[href^="#"]')


// Realiza um scroll suave até a seção referenciada pelo link clicado
function scrollToSection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)
    const sectionTop = section.getBoundingClientRect().top
    const positionToScroll = sectionTop + window.scrollY - 100 // Ajuste para evitar sobreposição com a navbar fixa

    window.scroll({
        top: positionToScroll,
        behavior: 'smooth'
    })
}

// Aplica a função de scroll suave a todos os links internos
internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

const btnTop = document.getElementById("btnTop");

// Controla a visibilidade do botão "Voltar ao Topo" com base na rolagem da página.
window.addEventListener("scroll", () => {
    if(window.scrollY > 160) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
})

// Rola suavemente para o topo ao clicar no botão "Voltar ao Topo".
btnTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
})