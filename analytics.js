
   new Chart(document.getElementById("milkProductionChart"), {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: "Milk Production (Liters)", // REQUIRED for legend
            data: [1000, 1100, 1200, 1150, 1250, 1300, 1280],
            borderColor: "blue",
            fill: true,
            backgroundColor: "rgba(0, 0, 255, 0.1)"
        }]
    },
    options: {
        responsive: true, // Ensures chart adjusts to container
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 20 // Adds space between chart and legend
                }
            }
        },
        layout: {
            padding: {
                bottom: 20 // Ensures legend has space
            }
        }
    }
});

new Chart(document.getElementById("inventoryChart"), {
    type: 'pie',
    data: {
        labels: ["Milk", "Cheese", "Butter", "Feed"],
        datasets: [{
            data: [50, 20, 15, 15],
            backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    }
});
   

new Chart(document.getElementById("financeChart"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: 'Revenue',
            data: [120000, 130000, 125000, 140000, 135000, 145000],
            backgroundColor: "green"
        }, {
            label: 'Expenses',
            data: [90000, 95000, 92000, 98000, 97000, 99000],
            backgroundColor: "red"
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    }
});

 new Chart(document.getElementById("ordersChart"), {
    type: 'doughnut',
    data: {
        labels: ["Retail", "Wholesale", "Online"],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ["#FF5733", "#33FF57", "#3357FF"]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    }
});





function validateAndSave() {
    let inputs = document.querySelectorAll('.input-field');
    let emptyFields = false;

    // Check for empty fields
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            emptyFields = true;
        }
    });

    if (emptyFields) {
        showAlert('error-alert');
    } else {
        showAlert('success-alert');
    }
}

function showAlert(alertId) {
    var alertBox = document.getElementById(alertId);
    alertBox.classList.remove("d-none");

    // Hide alert after 3 seconds
    setTimeout(function() {
        alertBox.classList.add("d-none");
    }, 3000);
}

function hideAlert(alertId) {
    document.getElementById(alertId).classList.add("d-none");
}

// Load Admin Name and Protect Dashboard
window.onload = () => {
	const adminName = localStorage.getItem("adminName");
  
	// Redirect to login if no admin is logged in
	if (!adminName) {
	  window.location.href = "login.html";
	  return;
	}
  
	// Display admin name
	document.getElementById("adminName").textContent = adminName;
  
	// Logout functionality
	const logoutLink = document.querySelector(".logout");
	logoutLink.addEventListener("click", () => {
	  localStorage.removeItem("adminName"); // Clear admin info
	  window.location.href = "login.html"; // Redirect to login
	});
  };
  
window.onload = function() {
	const adminName = localStorage.getItem("adminName");
	if (adminName) {
	  document.getElementById("adminNameDisplay").textContent = `${adminName}`;
	} else {
	  
	  window.location.href = "../login.html";
	}
  };

  
// Load existing user data
const userName = localStorage.getItem("username") || "Admin";
const userAvatar = localStorage.getItem("avatar") || "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png";

// Display user info
document.getElementById("adminNameDisplay").textContent = userName;
document.getElementById("adminAvatar").src = userAvatar;


document.addEventListener("DOMContentLoaded", function () {
    const languageIcon = document.querySelector(".language-icon");
    const languageDropdown = document.querySelector(".language-dropdown");

    languageIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the event from bubbling up
        languageDropdown.classList.toggle("show");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!languageDropdown.contains(event.target) && !languageIcon.contains(event.target)) {
            languageDropdown.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const notificationTrigger = document.querySelector(".notification-trigger");
    const notificationDropdown = document.querySelector(".notification-dropdown");

    // Toggle Notification Dropdown
    notificationTrigger.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from closing immediately
        notificationDropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!notificationDropdown.contains(event.target) && !notificationTrigger.contains(event.target)) {
            notificationDropdown.classList.remove("show");
        }
    });

    // Function to show profile popup
    window.showProfile = function (name, phone, email, imgUrl) {
        document.getElementById("profileName").innerText = name;
        document.getElementById("profilePhone").innerText = phone;
        document.getElementById("profileEmail").innerText = email;
        document.getElementById("profileImage").src = imgUrl;

        const profilePopup = document.getElementById("profilePopup");
        profilePopup.classList.add("show");
    };

    // Function to close profile popup
    window.closeProfile = function () {
        document.getElementById("profilePopup").classList.remove("show");
    };

    // Close profile popup when clicking outside
    document.getElementById("profilePopup").addEventListener("click", function (event) {
        if (event.target === this) {
            closeProfile();
        }
    });
});
