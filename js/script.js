console.log("Piątka dla ciebie jeśli tu jesteś!");


let main__button = document.querySelector(".main__button");
let body = document.querySelector(".body");
let main__nextColorName = document.querySelector(".main__nextColorName");

main__button.addEventListener("click", () => {

    body.classList.toggle("darkBackground");
    if (body.classList.contains("darkBackground")) {
        main__nextColorName.innerText = "jasny";
    } else {
        main__nextColorName.innerText = "ciemny";
    }

});

