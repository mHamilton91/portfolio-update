let logo = document.querySelector(".logo");
let toggleNav = document.querySelector(".navbarLink");
let navbar = document.querySelector("nav");


//When the logo is clicked the navbar either opens or closes
toggleNav.addEventListener('click', function() {
    //Checks to see if the phone is in portrait
    if(screen.orientation.angle === 0) {
        //Closes the navbar
        if(navbar.offsetWidth === 350) {
            navbar.style.width = '0';
            logo.style.left = '10px';
        } else {
            //Opens the navbar
            navbar.style.width = '350px';
            logo.style.left = '275px';
        }
    }
});

//If the user clicks outside of the navbar while it's open, it will close
document.addEventListener('click', function(e) {
    if(e.target.closest('nav') || e.target.closest('.navbarLink')) return;
    if(screen.orientation.angle === 0) {
    navbar.style.width = '0';
    logo.style.left = '10px';
    }
});


window.addEventListener('orientationchange', function() {
    if(screen.orientation.angle === 0) {
        console.log(screen.orientation.angle);
        navbar.style.width = '0';
        logo.style.left = '10px';
    } else {
        console.log(screen.orientation.angle);
        navbar.style.width = '100vw';
        logo.style.left = 'calc(100vw - 70px)';
    }
});

//Possibly add in navbar close on screen resize



