let checkbox = document.getElementById("chevron-checkbox");

console.log(checkbox);

// Display flags description when hover on flag flex box
let flags = document.querySelectorAll('.card-container');
function flipCard() {
    this.classList.add('flip');
    console.log("it's running")
}

for (let i = 0; i < flags.length; i++) {
    document.getElementsByClassName('card-container')[i].addEventListener('click', function () {
        if (document.getElementsByClassName('card-container is-flipped')[0] != undefined) {
            //document.getElementsByClassName('card-container is-flipped')[0].style.transitionDuration = "0s";
            document.getElementsByClassName('card-container is-flipped')[0].classList.toggle('is-flipped');
        }
        document.getElementsByClassName('card-container')[i].classList.toggle('is-flipped');
    });
}

