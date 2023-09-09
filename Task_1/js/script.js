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

//Contact us script

let btn = document.getElementById('sbmt')
btn.addEventListener('click', (e) => {
  e.preventDefault()

  // Email.send({
  //   SecureToken: '7a53ec65-850e-4a26-9ae9-4387db86b9d8',
  //   To: 'engziad90@gmail.com',
  //   From: 'visitor1373@gmail.com',
  //   Subject: document.getElementById('Email Subject').value,
  //   Body: document.getElementById('Content').value,
  // }).then((message) => alert(message))

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'visitor1373@gmail.com',
    Password: '3E2A6F12BA176BD2BEDAD6474DBF1621A202',
    To: 'engziad90@gmail.com',
    From: 'visitor1373@gmail.com',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  }).then((message) => alert(message))
})
