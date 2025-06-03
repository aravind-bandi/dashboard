document.addEventListener("DOMContentLoaded", function() {
    // Milk Production Chart
    var ctx1 = document.getElementById('milkChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Milk (Liters)',
                data: [4200, 4800, 5000, 5300, 5200, 5400],
                borderColor: '#007bff',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom' // Places the labels below the chart
                }
            }
        }
    });

    // Sales & Expenses Chart
    var ctx2 = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Sales (₹)',
                    data: [200000, 220000, 230000, 250000, 260000, 270000],
                    backgroundColor: 'green'
                },
                {
                    label: 'Expenses (₹)',
                    data: [100000, 110000, 115000, 120000, 125000, 130000],
                    backgroundColor: 'red'
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom' // Moves the labels below the chart
                }
            }
        }
    });
});




const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});








// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


// Get the language icon and dropdown
const languageIcon = document.querySelector('.language-icon');
const languageDropdown = document.querySelector('.language-dropdown');

// Add event listener to the language icon
languageIcon.addEventListener('click', function() {
  languageDropdown.classList.toggle('show');  // Toggle the visibility of the dropdown
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.closest('.language-icon') && !event.target.closest('.language-dropdown')) {
    languageDropdown.classList.remove('show');
  }
});


// Get the notification trigger and the dropdown
const notificationTrigger = document.querySelector('.notification-trigger');
const notificationDropdown = document.querySelector('.notification-dropdown');

// Toggle the dropdown visibility on click
notificationTrigger.addEventListener('click', function() {
  notificationDropdown.classList.toggle('show');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.closest('.notification-trigger') && !event.target.closest('.notification-dropdown')) {
    notificationDropdown.classList.remove('show');
  }
});






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

// Dropdown toggle
function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    if (!document.querySelector(".admin-profile").contains(event.target)) {
        document.getElementById("profileDropdown").style.display = "none";
    }
});

// Open Profile Edit Modal
function openProfileModal() {
    document.getElementById("profileModal").style.display = "flex";
}

// Close Profile Edit Modal
function closeProfileModal() {
    document.getElementById("profileModal").style.display = "none";
}

// Save profile changes
function saveProfile() {
    const newName = document.getElementById("newName").value.trim();
    const newAvatarInput = document.getElementById("newAvatar").files[0];

    if (newName) {
        localStorage.setItem("username", newName);
        document.getElementById("adminNameDisplay").textContent = newName;
    }

    if (newAvatarInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newAvatarURL = e.target.result;
            localStorage.setItem("avatar", newAvatarURL);
            document.getElementById("adminAvatar").src = newAvatarURL;
        };
        reader.readAsDataURL(newAvatarInput);
    }

    closeProfileModal();
}
  

