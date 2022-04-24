function success() {
    var audio = new Audio("audio/success-sound-effect.mp3");
    audio.play();

    localStorage.removeItem('cart');
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
delay(1000).then(() => console.log('ran after 1 second1 passed'));

function addHandler() {
    var button = document.querySelector("#buy-button");
    button.addEventListener("click", () => {
        success();
        delay(2500).then(() => window.location.href = "index.html");
    });
}

addHandler();