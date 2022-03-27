const burClick = document.querySelector('#burbankClick');
const chiClick = document.querySelector('#chicagoClick');
const dalClick = document.querySelector('#dallasClick');
const acceptBtn = document.querySelector('#accBtn');
const hideCookie = document.querySelector('.cookies');
const selector = document.querySelector('#tempSel');

let todayHigh = document.querySelector('#toHigh');
let todayLow = document.querySelector('#toLow');
let tomorrowHigh = document.querySelector('#tomHigh');
let tomorrowLow = document.querySelector('#tomLow');
let fridayHigh = document.querySelector('#friHigh');
let fridayLow = document.querySelector('#friLow');
let saturdayHigh = document.querySelector('#satHigh');
let saturdayLow = document.querySelector('#satLow');
let innerCount = 0;


function alertClick() {
    alert('Loading weather report...');
}

function cookieHide() {
    hideCookie.style.display = 'none';
}

function fahToCel() {
    innerCount++;
    if(innerCount % 2 == 0){
        todayHigh.innerText = 24;
        todayLow.innerText = 18;
        tomorrowHigh.innerText = 27;
        tomorrowLow.innerText = 19;
        fridayHigh.innerText = 21;
        fridayLow.innerText = 16;
        saturdayHigh.innerText = 26;
        saturdayLow.innerText = 21;
        return [
            todayHigh, todayLow, tomorrowHigh, tomorrowLow, fridayHigh, fridayLow,
            saturdayHigh, saturdayLow
        ];
    } else {
    todayHigh.innerText = 75;
    todayLow.innerText = 65;
    tomorrowHigh.innerText = 80;
    tomorrowLow.innerText = 66;
    fridayHigh.innerText = 69;
    fridayLow.innerText = 61;
    saturdayHigh.innerText = 78;
    saturdayLow.innerText = 70;
    return [
        todayHigh, todayLow, tomorrowHigh, tomorrowLow, fridayHigh, fridayLow,
        saturdayHigh, saturdayLow
    ];
    }
}


burClick.addEventListener('click', alertClick);
chiClick.addEventListener('click', alertClick);
dalClick.addEventListener('click', alertClick);
acceptBtn.addEventListener('click', cookieHide);
selector.addEventListener('change', fahToCel)