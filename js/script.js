//LOGIN///
var reg = document.querySelector(".login");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-login");
var closePP = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");


reg.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-show");
    popup.classList.add("modal-show");
    popup.classList.add("modal-login-animation");
    if (storage) {
        login.value = storage;
        password.focus();
        }
        else {
            login.focus();
        }
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-login-animation");
    popup.classList.add("modal-error-login");
    setTimeout(function() {
        popup.classList.remove("modal-error-login");
        }, 500);
    }
    else {
    localStorage.setItem("login", login.value);
    }

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
         if (popup.classList.contains("modal-show")) {
         popup.classList.remove("modal-show");
         overlay.classList.remove("modal-overlay-show");
         popup.classList.remove("modal-error-login");
         popup.classList.remove("modal-login-animation");
         }
    }
 });

closePP.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error-login");
    popup.classList.remove("modal-login-animation");
});


///MAP///

var map = document.querySelector(".button-map");
var popup_map = document.querySelector(".modal-map");
var closePPmap = popup_map.querySelector(".modal-close");

map.addEventListener("click", function() {
    event.preventDefault();
    overlay.classList.add("modal-overlay-show");
    popup_map.classList.add("modal-show");

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
         if (popup_map.classList.contains("modal-show")) {
         popup_map.classList.remove("modal-show");
         overlay.classList.remove("modal-overlay-show");
         }
    }
 });

closePPmap.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});