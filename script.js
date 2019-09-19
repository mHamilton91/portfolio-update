let logo = document.querySelector(".logo");
let toggleNav = document.querySelector(".navbarLink");
let navbar = document.querySelector("nav");
let listItems = document.querySelectorAll("li");
let profilePic = document.querySelector(".profile");


//When the logo is clicked the navbar either opens or closes
toggleNav.addEventListener('click', function() {
    //Checks to see if the phone is in portrait
    if(window.innerHeight > 650) {
        //Closes the navbar
        if(navbar.offsetWidth === 350) {
            navbar.style.width = '0';
            logo.style.left = '10px';
            for(let i = 0; i < listItems.length; i++) {
                listItems[i].style.left = '300px';
            }
            profilePic.style.opacity = '0';
        } else {
            //Opens the navbar
            navbar.style.width = '350px';
            logo.style.left = '275px';
            for(let i = 0; i < listItems.length; i++) {
                listItems[i].style.left = '0';
            }
            profilePic.style.opacity = '1';
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

window.addEventListener('resize', initialSize);

function initialSize() {
    if(window.innerHeight > 650) {
        navbar.style.width = '0';
        navbar.style.height = '100vh';
        logo.style.left = '10px';
    } else {
        navbar.style.width = '100vw';
        navbar.style.height = '80px';
        if(window.innerWidth > 350) {
            logo.style.left = 'calc(100vw - 100px)';
        } else {
            logo.style.left = 'calc(100vw - 15%)';
        }
    }
}

initialSize();
//Possibly add in navbar close on screen resize



