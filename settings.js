  // Function to update date display
  function updateDateDisplay(sectionId) {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    document.getElementById(sectionId).textContent = 'Last saved: ' + now.toLocaleDateString('en-US', options);
}

// Function to clear all inputs in a form
function clearFormInputs(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        if (input.type === 'text' || input.type === 'email' || input.type === 'tel' || input.type === 'password' || input.type === 'number') {
            input.value = '';
        } else if (input.type === 'textarea') {
            input.value = '';
        } else if (input.type === 'select-one') {
            input.selectedIndex = 0;
        } else if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        }
    });
}

// Function to show success message
function showSuccessMessage(sectionName) {
    // Create a temporary alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 end-0 m-3';
    alertDiv.style.zIndex = '1100';
    alertDiv.innerHTML = `
        <strong>Success!</strong> ${sectionName} saved successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(alertDiv);
        alert.close();
    }, 3000);
}

// Initialize date displays
document.addEventListener('DOMContentLoaded', function() {
    // Set initial dates
    updateDateDisplay('generalDateDisplay');
    updateDateDisplay('usersDateDisplay');
    updateDateDisplay('milkDateDisplay');
    updateDateDisplay('inventoryDateDisplay');
    updateDateDisplay('financeDateDisplay');

    // Add event listeners to save buttons
    
    // General Settings
    document.getElementById('saveGeneralBtn').addEventListener('click', function() {
        updateDateDisplay('generalDateDisplay');
        clearFormInputs('generalForm');
        showSuccessMessage('General settings');
    });

    // User Management
    document.getElementById('saveUsersBtn').addEventListener('click', function() {
        updateDateDisplay('usersDateDisplay');
        showSuccessMessage('User profile');
    });

    // Milk Production
    document.getElementById('saveMilkBtn').addEventListener('click', function() {
        updateDateDisplay('milkDateDisplay');
        clearFormInputs('milkForm');
        showSuccessMessage('Milk production settings');
    });

    // Inventory Management
    document.getElementById('saveInventoryBtn').addEventListener('click', function() {
        updateDateDisplay('inventoryDateDisplay');
        showSuccessMessage('Inventory settings');
    });

    // Financial Settings
    document.getElementById('saveFinanceBtn').addEventListener('click', function() {
        updateDateDisplay('financeDateDisplay');
        clearFormInputs('financeForm');
        showSuccessMessage('Financial settings');
    });

    // Simple script to handle API key copy button
    document.getElementById('copyApiKey')?.addEventListener('click', function() {
        const apiKeyInput = document.getElementById('apiKey');
        apiKeyInput.select();
        document.execCommand('copy');
        
        // Change button text temporarily
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="bi bi-check2"></i> Copied!';
        setTimeout(() => {
            this.innerHTML = originalText;
        }, 2000);
    });
});