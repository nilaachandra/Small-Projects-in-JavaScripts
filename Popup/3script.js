let popup = document.getElementById('popup');
let popupOpen = document.getElementById('openpopup');
let popupClose = document.getElementById('closepopup');

//open popup
function openPopup(){
    popup.classList.add("open-popup");
}
popupOpen.addEventListener('click', openPopup);


//close popup
function closePopup() {
    popup.classList.remove("open-popup");
}
popupClose.addEventListener('click', closePopup);
