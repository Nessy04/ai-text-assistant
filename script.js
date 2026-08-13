const button = document.getElementById("summarizeBtn");
const textArea = document.getElementById("userText");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = textArea.value.trim();

    if (text === "") {
        result.textContent = "Please enter some text first.";
        return;
    }

    const sentences = text
        .split(/(?<=[.!?])\s+/)
        .filter(sentence => sentence.length > 20);

    if (sentences.length === 0) {
        result.textContent = text;
        return;
    }

    const summaryLength = Math.max(1, Math.ceil(sentences.length / 3));

    const summary = sentences
        .slice(0, summaryLength)
        .join(" ");

    result.textContent = summary;
});
