function toggleNav() {
    document.getElementById("myNav").classList.toggle("active");
  }
  
  
  
    
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
    
  var options = {
	series: [{
	name: 'Net Profit',
	data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
	name: 'Revenue',
	data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
	name: 'Free Cash Flow',
	data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
	chart: {
	type: 'bar',
	height: 350
  },
  plotOptions: {
	bar: {
	  horizontal: false,
	  columnWidth: '55%',
	  borderRadius: 5,
	  borderRadiusApplication: 'end'
	},
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	show: true,
	width: 2,
	colors: ['transparent']
  },
  xaxis: {
	categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
	title: {
	  text: '$ (thousands)'
	}
  },
  fill: {
	opacity: 1
  },
  tooltip: {
	y: {
	  formatter: function (val) {
		return "$ " + val + " thousands"
	  }
	}
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();

//   chart


var options = {
	series: [{
	name: 'Order Sales',
	type: 'area',
	data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
	name: 'Purchase Orders',
	type: 'line',
	data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
	chart: {
	height: 350,
	type: 'line',
  },
  stroke: {
	curve: 'smooth'
  },
  fill: {
	type:'solid',
	opacity: [0.35, 1],
  },
  labels: ['Jan ', 'Feb ','March','Apirl','May','Jun ','July','Aug','Sep ','Nov','Dec'],
  markers: {
	size: 0
  },
  yaxis: [
	{
	  title: {
		text: 'Sales Orders ',
	  },
	},
	{
	  opposite: true,
	  title: {
		text: ' Orders ',
	  },
	},
  ],
  tooltip: {
	shared: true,
	intersect: false,
	y: {
	  formatter: function (y) {
		if(typeof y !== "undefined") {
		  return  y.toFixed(0) + " ";
		}
		return y;
	  }
	}
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();
  
  // Get references to the form elements and the table body
const revenueForm = document.getElementById('revenue-form');
const revenueTbody = document.getElementById('revenue-tbody');
const totalRevenueSpan = document.getElementById('total-revenue');

// Initialize the total revenue
let totalRevenue = 0;

// Add event listener for form submission
revenueForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload
    
    // Get the input values
    const date = document.getElementById('date').value;
    const product = document.getElementById('product').value;
    const amount = parseFloat(document.getElementById('amount').value); // Convert to float
    const units = document.getElementById('units').value;
    const revenueSource = document.getElementById('revenue-source').value;
    const region = document.getElementById('region').value;

    // Create a new row in the table
    const newRow = document.createElement('tr');
    
    // Insert new data into the row
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${product}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>${units}</td>
        <td>${revenueSource}</td>
        <td>${region}</td>
    `;
    
    // Add the new row to the table body
    revenueTbody.appendChild(newRow);

    // Update the total revenue
    totalRevenue += amount;
    totalRevenueSpan.textContent = totalRevenue.toFixed(2);

    // Clear the form inputs after submission
    revenueForm.reset();
});
