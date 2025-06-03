function toggleNav() {
    document.getElementById("myNav").classList.toggle("active");
  }



  document.querySelectorAll('.overlay a').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.overlay a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  }); 
 
 // Ticket Trends Chart
      // Ticket Trends Chart
      var ctx1 = document.getElementById('ticketChart').getContext('2d');
      new Chart(ctx1, {
          type: 'line',
          data: {
              labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
              datasets: [{
                  label: 'Tickets Created',
                  data: [50, 60, 70, 90, 80, 100],
                  borderColor: 'blue',
                  fill: false
              }, {
                  label: 'Tickets Resolved',
                  data: [30, 40, 60, 70, 75, 90],
                  borderColor: 'aqua',
                  fill: false
              }]
          },
          options: {
              plugins: {
                  legend: {
                      display: true,
                      position: 'bottom' // Move legend to the bottom
                  }
              }
          }
      });
      
      // Resolution Time Chart
      var ctx2 = document.getElementById('resolutionChart').getContext('2d');
      new Chart(ctx2, {
          type: 'bar',
          data: {
              labels: ['0-1 Day', '1-3 Days', '3-7 Days', '7+ Days'],
              datasets: [{
                  label: 'Tickets',
                  data: [40, 30, 20, 10],
                  backgroundColor: ['teal', 'cornflowerblue', 'blueviolet', 'coral']
              }]
          },
          options: {
              plugins: {
                  legend: {
                      display: true,
                      position: 'bottom' // Move legend to the bottom
                  }
              }
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
