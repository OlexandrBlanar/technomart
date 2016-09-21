var linkBtn=document.querySelector(".btn-write-us");
var modalWindow = document.querySelector(".write-us");
var cancelBtn = document.querySelector("#cancel-btn")
var login = modalWindow.querySelector("#username-field")
var eMail = modalWindow.querySelector("#e-mail-field")
var sendFormBtn = modalWindow.querySelector("#send-form-btn")
var textField = modalWindow.querySelector([name="text-field"])
var storageName = localStorage.getItem("login")
var storageMail = localStorage.getItem("eMail")
linkBtn.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.add("write-us-show");
    if(storageName && storageMail){
        login.value=storageName;
        eMail.value=storageMail;
        textField.focus();
    } else    {login.focus();}
});
cancelBtn.addEventListener("click", function(event){
    event.preventDefault();
    modalWindow.classList.remove("write-us-show");
});

sendFormBtn.addEventListener("click", function(event){
    if (!(login.value && eMail.value)) {
        event.preventDefault();
        login.focus();
        modalWindow.classList.remove("modal-error");
        modalWindow.classList.add("modal-error");
        alert("Нужно внести логин и пароль");
    } else {
        localStorage.setItem("login". login.value);
        localStorage.setItem("eMail". eMail.value);
    }
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode==27) {
        if (modalWindow.classList.contains("write-us-show"));{
            modalWindow.classList.remove("write-us-show");
        }
    }
});

var  openMap = document.querySelector(".map");
var modalMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".close-map")
openMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalMap.classList.add("moda-content-map-open");
});
closeMap.addEventListener("click", function(event){
    event.preventDefault();
    modalMap.classList.remove("moda-content-map-open");
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode==27) {
        if (modalMap.classList.contains("moda-content-map-open"));{
            modalMap.classList.remove("moda-content-map-open");
        }
    }
});

