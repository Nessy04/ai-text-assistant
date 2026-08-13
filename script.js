alert("JavaScript works!");
const button = document.getElementById("summarizeBtn");
const textArea = document.getElementById("userText");
const result = document.getElementById("result");

const keywordsButton = document.getElementById("keywordsBtn");
const wordCountButton = document.getElementById("wordCountBtn");

// SUMMARIZE
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

// EXTRACT KEYWORDS
keywordsButton.addEventListener("click", function () {
    const text = textArea.value.trim();

    if (text === "") {
        result.textContent = "Please enter some text first.";
        return;
    }

    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/);

    const stopWords = [
        "the", "a", "an", "and", "or", "but",
        "is", "are", "was", "were", "to",
        "of", "in", "on", "for", "with", "can"
    ];

    const keywords = [...new Set(
        words.filter(word =>
            word
const copyButton = document.getElementById("copyBtn");

copyButton.addEventListener("click", function () {
    const textToCopy = result.textContent.trim();

    if (
        textToCopy === "" ||
        textToCopy === "Your result will appear here."
    ) {
        return;
    }

    navigator.clipboard.writeText(textToCopy).then(function () {
        const originalText = copyButton.textContent;

        copyButton.textContent = "Copied! ✓";

        setTimeout(function () {
            copyButton.textContent = originalText;
        }, 1500);
    });
});
