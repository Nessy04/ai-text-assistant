const button = document.getElementById("summarizeBtn");
const textArea = document.getElementById("userText");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = textArea.value.trim();

    if (text === "") {
        result.textContent = "Please enter some text first.";
        return;
    }

    result.textContent = "Great! Your text is ready to be summarized.";
});
