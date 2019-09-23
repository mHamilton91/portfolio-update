let logo = document.querySelector(".logo");
let toggleNav = document.querySelector(".navbarLink");
let navbar = document.querySelector("nav");
let listItems = document.querySelectorAll("li");
let profilePic = document.querySelector(".profile");
let scrollBtn = document.querySelector(".scroll");

function close(size) {
    if(size === 'large') {
        navbar.style.width = '0';
        logo.style.left = '10px';
        //Moves list items farther to the right so they can slide in when the navbar is opened
        for(let i = 0; i < listItems.length; i++) {
            listItems[i].style.left = '300px';
        }
        //Fades out the profile pic on close
        profilePic.style.opacity = '0';
    } else {
        navbar.style.height = '80px';
        for(let i = 0; i < listItems.length; i++) {
            listItems[i].style.left = 'calc(100vh*2)';
        }
    }
}

function open(size) {
    if(size === 'large') {
        navbar.style.width = '350px';
        for(let i = 0; i < listItems.length; i++) {
            listItems[i].style.left = '0';
        }
    } else {
        navbar.style.height = '350px';
        for(let i = 0; i < listItems.length; i++) {
            listItems[i].style.left = '0';
        }
    }
}

function initialSize() {
    if(window.innerHeight > 650) {
        navbar.style.height = '100vh';
        close('large');
    } else {
        navbar.style.width = '100vw';
        close('small');
        if(window.innerWidth > 350) {
            logo.style.left = 'calc(100vw - 100px)';
        } else {
            logo.style.left = 'calc(100vw - 15%)';
        }
    }
}

//When the logo is clicked the navbar either opens or closes
toggleNav.addEventListener('click', function() {
    //Check if the screen height is greater than 650px (For Larger Screens)
    if(window.innerHeight > 650) {
        //Closes the navbar
        if(navbar.offsetWidth === 350) {
            close('large');
        } else {
            //Opens the navbar
            open('large');
            logo.style.left = '275px';
            //Profile pic fades back in on open
            profilePic.style.opacity = '1';
        }
    } else {
        //If the screen height is less than 650px (For Smaller Screens)
        if(navbar.offsetHeight === 350) {
            close('small');
        } else {
            open('small')
        }
    }
});

//If the user clicks outside of the navbar while it's open, it will close
document.addEventListener('click', function(e) {
    //If the user clicks on the navbar it will stay open or closed and if they click on the button, it will open or close
    if(e.target.closest('nav') || e.target.closest('.navbarLink')) return;
    //If they click outside of the navbar, it will close
    if(window.innerHeight > 650) {
        close('large');
    } else {
        close('small');
    }
});

window.addEventListener('resize', initialSize);
initialSize();

window.addEventListener('scroll', function() {
    let currentPosition = window.pageYOffset;
    let height = window.innerHeight;

    if(currentPosition > height) {
        scrollBtn.style.opacity = '1';
    } else if(currentPosition < 300) {
        scrollBtn.style.opacity = '0';
    }
});

scrollBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

