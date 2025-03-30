document.addEventListener("DOMContentLoaded", () => {
    const recommendationInput = document.getElementById("new-recommendation");
    const recommendationList = document.getElementById("recommendation-list");
    const submitButton = document.querySelector("button");
    const popup = document.getElementById("popup-message");
    const popupText = document.getElementById("popup-text");
    const popupClose = document.getElementById("popup-close");

    submitButton.addEventListener("click", addRecommendation);
    recommendationInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addRecommendation();
        }
    });

    function addRecommendation() {
        const text = recommendationInput.value.trim();
        if (text === "") {
            showPopup("Please enter a valid recommendation!");
            return;
        }

        const newItem = document.createElement("li");
        newItem.textContent = text;
        recommendationList.appendChild(newItem);

        showPopup("Thank you for submitting a recommendation!");
        recommendationInput.value = "";
        recommendationInput.focus();
    }

    function showPopup(message) {
        popupText.textContent = message;
        popup.style.display = "block";
    }

    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
