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
const keywordsButton = document.getElementById("keywordsBtn");
const wordCountButton = document.getElementById("wordCountBtn");

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
            word.length > 4 && !stopWords.includes(word)
        )
    )];

    result.textContent =
        "Keywords: " + keywords.slice(0, 10).join(", ");
});

wordCountButton.addEventListener("click", function () {
    const text = textArea.value.trim();

    if (text === "") {
        result.textContent = "Word count: 0";
        return;
    }

    const words = text.split(/\s+/);
    result.textContent = "Word count: " + words.length;
});
const keywordsButton = document.getElementById("keywordsBtn");
const wordCountButton = document.getElementById("wordCountBtn");

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
            word.length > 4 && !stopWords.includes(word)
        )
    )];

    result.textContent =
        "Keywords: " + keywords.slice(0, 10).join(", ");
});

wordCountButton.addEventListener("click", function () {
    const text = textArea.value.trim();

    if (text === "") {
        result.textContent = "Word count: 0";
        return;
    }

    const words = text.split(/\s+/);

    result.textContent = "Word count: " + words.length;
});
