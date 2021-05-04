let btn = document.querySelector('.j-btn-test');
let screenP = document.querySelector('#screen');
let coordsP = document.querySelector('#coords');

function ScreenSize() {
    screenP.innerText = `${window.screen.width}px на ${window.screen.height}px`;
}


let errorResult = () => {
    status.textContent = 'Невозможно определить геолокацию';
}


let Result = (position) => {
    console.log('position', position);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    coordsP.textContent = `${latitude}, ${longitude}`;
}

btn.addEventListener('click', () => {
    ScreenSize();

    if (!navigator.geolocation) {
        status.textContent = 'Невозможно определить геолокацию';
    } else {

        navigator.geolocation.getCurrentPosition(Result, errorResult);
    }
});