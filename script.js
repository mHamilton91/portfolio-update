let logo = document.querySelector(".logo");
let toggleNav = document.querySelector(".navbarLink");
let navbar = document.querySelector("nav");

toggleNav.addEventListener('click', function() {
    // && window.innerHeight > 500
    if(screen.orientation.angle === 0) {
        if(navbar.offsetWidth === 350) {
            navbar.style.width = '0';
            logo.style.left = '10px';
        } else {
            navbar.style.width = '350px';
            logo.style.left = '275px';
        }
    }
});

document.addEventListener('click', function(e) {
    if(e.target.closest('nav') || e.target.closest('.navbarLink')) return;
    navbar.style.width = '0';
    logo.style.left = '10px';
});


window.addEventListener('orientationchange', function() {
    testOrientation();
})

function testOrientation() {
    if(screen.orientation.angle === 0 && window.innerHeight > 500) {
        console.log(screen.orientation.angle);
        navbar.style.width = '0';
        logo.style.left = '10px';
    } else {
        console.log(screen.orientation.angle);
        navbar.style.width = '100vw';
        logo.style.left = 'calc(100vw - 70px)';
    }
}

testOrientation();

//Possibly add in navbar close on screen resize



