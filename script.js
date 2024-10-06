let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let skill_show= document.querySelector('#skill');
let skill_hide=document.querySelector('.skill-view');
let skill_icon=document.querySelector('#skill-icon');



skill_hide.onclick = () => {
    skill_icon.classList.toggle('bx-chevron-up');
    skill_show.classList.toggle('skill-hide')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            });
        }   
    });
}

 let header = document.querySelector('header');

 header.classList.toggle('sticky', window.scrollY>100)
 ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content,.heading', { origin: 'top'} );
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom'} );
 ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left'} );
 ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right'} );

 const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Backend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
   
 });
 
function sendmail(){
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        body: document.getElementById('body').value,
        body: document.getElementById('body').value,
        number: document.getElementById('number').value
    }
    emailjs.send("service_y8q1sv8","template_7aikvqg",params).then(alert("Email send!!"));
}