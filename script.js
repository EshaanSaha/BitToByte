let goals = [];

// Load goals from local storage when the page is loaded
window.onload = function() {
    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) {
        goals = storedGoals;
        updateGoalList();
    }
};

function addGoal() {
    const goalName = document.getElementById('goalName').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    
    if (goalName && !isNaN(goalAmount) && !isNaN(currentSavings)) {
        goals.push({ goalName, goalAmount, currentSavings });
        updateLocalStorage(); // Update local storage
        updateGoalList();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function updateGoalList() {
    const goalList = document.getElementById('goals');
    goalList.innerHTML = ''; // Clear the current list
    goals.forEach((goal, index) => {
        const li = document.createElement('li');
        const progress = ((goal.currentSavings / goal.goalAmount) * 100).toFixed(2);
        li.textContent = `${goal.goalName}: $${goal.currentSavings} / $${goal.goalAmount} (${progress}%)`;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editGoal(index);
        li.appendChild(editButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteGoal(index);
        li.appendChild(deleteButton);

        goalList.appendChild(li);
    });
}

function editGoal(index) {
    const goal = goals[index];
    document.getElementById('goalName').value = goal.goalName;
    document.getElementById('goalAmount').value = goal.goalAmount;
    document.getElementById('currentSavings').value = goal.currentSavings;

    // Remove the goal from the list for editing
    goals.splice(index, 1);
    updateLocalStorage(); // Update local storage
    updateGoalList(); // Refresh the displayed list
}

function deleteGoal(index) {
    goals.splice(index, 1);
    updateLocalStorage(); // Update local storage
    updateGoalList(); // Refresh the displayed list
}

function updateLocalStorage() {
    localStorage.setItem('goals', JSON.stringify(goals));
}

function clearInputs() {
    document.getElementById('goalName').value = '';
    document.getElementById('goalAmount').value = '';
    document.getElementById('currentSavings').value = '';
}
