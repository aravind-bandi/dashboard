 // Profit data
 const profitData = [
    { amount: " 2,543", period: "Today's Profit" },
    { amount: " 17,800", period: "Weekly Profit" },
    { amount: " 72,000", period: "Monthly Profit" },
    { amount: " 214,000", period: "Yearly Profit" }
];

function showProfit(index) {
    if (index < profitData.length) {
        let profitContainer = document.getElementById("profit-display");
        let profitEntry = document.createElement("div");
        profitEntry.innerHTML = `<h3>${profitData[index].amount}</h3><p>${profitData[index].period}</p>`;
        profitContainer.appendChild(profitEntry);
        profitContainer.style.display = "block"; // Make sure it's visible

        setTimeout(() => showProfit(index + 1), 3000); // Show next profit after 3 seconds
    }
}

setTimeout(() => {
    document.getElementById("loader").style.display = "none"; // Hide loader
    document.getElementById("profit-title").innerText = "Profit Summary"; // Change title
    showProfit(0);
}, 3000); // Start showing profits after 3 seconds
 function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() !== "") {
        // Append user message
        let userMessage = document.createElement("p");
        userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
        chatBox.appendChild(userMessage);

        // Auto-scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input field
        document.getElementById("user-input").value = "";

        // Simulate a response from support
        setTimeout(() => {
            let supportMessage = document.createElement("p");
            supportMessage.innerHTML = `<strong>Support:</strong> Thank you for your message!`;
            chatBox.appendChild(supportMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 3000);
    }
}

  document.addEventListener("DOMContentLoaded", function() {
    // Select all categories
    document.querySelectorAll(".category").forEach(category => {
        category.addEventListener("click", function() {
            alert(this.innerText + " category stock is available!");
        });
    });
});