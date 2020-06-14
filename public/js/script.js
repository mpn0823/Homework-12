'use strict';

// Add event handlers for all our buttons
document.querySelectorAll("button").forEach(x => {
    // If it's not the submit button then update burger's 
    // status to eaten in database and reload the page
    if (x.id !== "submit") {
        x.addEventListener("click", () => {
            // Get the name of the burger corresponding to this button  
            const burgerName = x.parentElement.innerText.slice(0, -x.innerText.length).trim();
            fetch("/api/eat-burger", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: burgerName })
            });
            location.reload();
        });
    }
    // If it is the submit button then add burger name
    // from input field to the database and reload the page
    else {
        x.addEventListener("click", () => {
            // Get text from input field
            const burgerName = document.querySelector("input").value.trim();
            fetch("/api/add-burger", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: burgerName })
            });
            location.reload();
        });
    }
});