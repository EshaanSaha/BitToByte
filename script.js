document.getElementById('goal-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const goalName = document.getElementById('goal-name').value;
    const goalAmount = document.getElementById('goal-amount').value;
    const goalDeadline = document.getElementById('goal-deadline').value;

    // Logic to save the goal (e.g., to a database or local storage) goes here
    console.log(`Goal added: ${goalName}, Amount: ${goalAmount}, Deadline: ${goalDeadline}`);

    // Reset the form
    this.reset();
    // Close the modal
    document.getElementById('goal-modal').style.display = 'none';
});

// Modal close when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('goal-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
