function getRepos() {
  fetch('https://api.github.com/users/1Ziad Etman1/repos')
    .then((response) => response.json())

    .then((repositories) => {
      repositories.forEach((repo) => {
        let repoName = document.createTextNode(repo.name)
        let Url = document.createElement('a')
        let urlText = document.createTextNode('Visit')
      })
    })
}

//Navbar Icon
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY
    let offset = section.offsetTop - 100
    let height = section.offsetHeight
    let id = section.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })

  let header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 100)

  //Remove toggle icon and navbar when click navbar links
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}
