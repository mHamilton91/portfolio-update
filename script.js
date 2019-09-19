let logo = document.querySelector(".logo");
let toggleNav = document.querySelector(".navbarLink");
let navbar = document.querySelector("nav");


//When the logo is clicked the navbar either opens or closes
toggleNav.addEventListener('click', function() {
    //Checks to see if the phone is in portrait
    if(window.innerHeight > 650) {
        //Closes the navbar
        if(navbar.offsetWidth === 350) {
            navbar.style.width = '0';
            logo.style.left = '10px';
        } else {
            //Opens the navbar
            navbar.style.width = '350px';
            logo.style.left = '275px';
        }
    } else {
        if(navbar.offsetHeight === 350) {
            navbar.style.height = '80px';
        } else {
            navbar.style.height = '350px';
        }
    }
});

//If the user clicks outside of the navbar while it's open, it will close
document.addEventListener('click', function(e) {
    if(e.target.closest('nav') || e.target.closest('.navbarLink')) return;
    if(window.innerHeight > 650) {
    navbar.style.width = '0';
    logo.style.left = '10px';
    } else {
        navbar.style.height = '80px';
    }
});

window.addEventListener('resize', function() {
    if(window.innerHeight > 650) {
        navbar.style.width = '0';
        navbar.style.height = '100vh';
        logo.style.left = '10px';
    } else {
        navbar.style.width = '100vw';
        navbar.style.height = '80px';
        logo.style.left = 'calc(100vw - 70px)';
    }
});

//Possibly add in navbar close on screen resize



