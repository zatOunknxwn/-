// Открытие и закрытие всплывающего сообщения оформления заказа
var successModal = document.getElementById("success-modal");
var closeButton = document.querySelector(".close");

closeButton.onclick = function() {
    successModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == successModal) {
        successModal.style.display = "none";
    }
}

var form = document.getElementById("checkout-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    successModal.style.display = "block";
});
