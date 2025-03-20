document.addEventListener("DOMContentLoaded", function() {
    // Botão para aumentar a fonte
    const toggleFontButton = document.createElement("button");
    toggleFontButton.textContent = "Aumentar Fonte";
    toggleFontButton.style.margin = "20px";
    document.body.insertBefore(toggleFontButton, document.body.firstChild);

    let fontSize = 16;
    toggleFontButton.addEventListener("click", function() {
        fontSize += 2;
        document.body.style.fontSize = fontSize + "px";
    });
});