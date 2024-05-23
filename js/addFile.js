// Добавление файлов для формы

const fileInput = document.getElementById('fileInput');

const fileList = document.getElementById('fileList');

fileInput.addEventListener('change', function() {

  fileList.innerHTML = '';

  for (let i = 0; i < fileInput.files.length; i++) {

    const fileItem = document.createElement('div');
    fileItem.textContent = fileInput.files[i].name;


    fileList.appendChild(fileItem);
  }
});

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (validForm()) {
      document.getElementById("popup").classList.remove("hidden");
      setTimeout(function () {
        document.getElementById("popup").classList.add("hidden");
      }, 3000);
  
      event.target.reset();
    }
  });
  
// Валидация формы

  function validForm() {
    var myName = document.getElementById("input_name").value;
    var myMail = document.getElementById("input_email").value;
    var myText = document.getElementById("text_form").value;
  
    if (myName.trim() === "" || myMail.trim() === "" || myText.trim() === "") {
      alert("Заполните все поля формы!");
      return false;
    }
  
    var mail = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,5}$/i;
    var validMail = mail.test(myMail);
    if (!validMail) {
      alert("Введен некорректный адрес электронной почты!");
      return false;
    }
  
    return true;
  }
  