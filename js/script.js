{
    const welcome = () => {
        console.log("Piątka dla ciebie jeśli tu jesteś!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const main__nextColorName = document.querySelector(".main__nextColorName");

        body.classList.toggle("darkBackground");
        if (body.classList.contains("darkBackground")) {
            main__nextColorName.innerText = "jasny";
        } else {
            main__nextColorName.innerText = "ciemny";
        }

    };

    const init = () => {
        let main__button = document.querySelector(".main__button");
        main__button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();

}