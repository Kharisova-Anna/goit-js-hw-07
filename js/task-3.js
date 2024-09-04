const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimInput = event.currentTarget.value.trim();
    output.textContent = trimInput === "" ? "Anonymous" : trimInput;
})