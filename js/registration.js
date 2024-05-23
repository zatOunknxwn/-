function capitalizeInput(inputField) {
    inputField.value = inputField.value.toUpperCase();
}



function submitForm() {
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var age = parseInt(document.getElementById("age").value);

    if (lastName === "" || firstName === "" || isNaN(age)) {
        alert("Заполните все поля формы!")
    } else if (age < 18) {
        alert("Карта выдается только после 18 лет!");
    } else {
        var cardNumber = generateRandomCardNumber();
        alert("Номер карты: " + cardNumber + "\nФамилия: " + lastName + "\nИмя: " + firstName);
        resetForm();
    }
}

function generateRandomCardNumber() {
    return Math.floor(Math.random() * 1000000000) + 1000000000;
}

function resetForm() {
    document.getElementById("customerForm").reset();
}