
// Landing Page redirect
let checkbox = document.getElementById("chevron-checkbox");
let title = document.getElementById("landing-title");

if(checkbox){
    checkbox.addEventListener("click", () => {
        // Individual timeout on landing-title element to fade-out
        setTimeout(() => {
            title.style.opacity = 0;
        }, 200)

        // Slower timeout for the window redirect
        setTimeout(() => {
            window.location = "/home";
        }, 400);
    });
}

// Navigation Bar Toggle

document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    if ($navbarBurgers.length > 0) {
  
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
  
// Display flags description when hover on flag flex box
let flags = document.querySelectorAll('.card-container');
function flipCard() {
    this.classList.add('flip');
    console.log("it's running")
}

for (let i = 0; i < flags.length; i++) {
    document.getElementsByClassName('card-container')[i].addEventListener('click', function () {
        if (document.getElementsByClassName('card-container is-flipped')[0] != undefined && document.getElementsByClassName('card-container is-flipped')[0] != this) {
            document.getElementsByClassName('card-container is-flipped')[0].classList.toggle('is-flipped');
        }
        document.getElementsByClassName('card-container')[i].classList.toggle('is-flipped');
    });
}

