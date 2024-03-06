let display = document.getElementById("display")

function button_click(button) {
    if(button.textContent === "=") {
        try {
            display.textContent = eval(display.textContent);
            if(isNaN(display.textContent)) display.textContent = "Something went wrong"; //Sometimes result in error not cough by the catch statement ¯\_(ツ)_/¯
        } catch (e) {
            display.textContent = "Error ocurred";
        }
    }
    else if (button.textContent === "C") display.textContent = "";
    else display.textContent += button.textContent;
}