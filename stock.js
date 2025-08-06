let stockData = [
    { id: 1, name: "Wheat Bran", category: "Feed", quantity: 500, unit: "kg" },
    { id: 2, name: "Antibiotics", category: "Medicine", quantity: 50, unit: "vials" },
    { id: 3, name: "Milking Machine", category: "Equipment", quantity: 10, unit: "units" },
    { id: 4, name: "Mineral Supplements", category: "Feed", quantity: 100, unit: "kg" },
    { id: 5, name: "Calcium Booster", category: "Medicine", quantity: 30, unit: "bottles" }
];

function renderTable() {
    const tableBody = document.getElementById("stockTableBody");
    tableBody.innerHTML = "";
    stockData.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editStock(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteStock(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addStock() {
    let id = stockData.length + 1;
    let name = prompt("Enter item name:");
    let category = prompt("Enter category:");
    let quantity = prompt("Enter quantity:");
    let unit = prompt("Enter unit:");
    if (name && category && quantity && unit) {
        stockData.push({ id, name, category, quantity, unit });
        renderTable();
    }
}

function editStock(index) {
    let item = stockData[index];
    let name = prompt("Edit item name:", item.name);
    let category = prompt("Edit category:", item.category);
    let quantity = prompt("Edit quantity:", item.quantity);
    let unit = prompt("Edit unit:", item.unit);
    if (name && category && quantity && unit) {
        stockData[index] = { ...item, name, category, quantity, unit };
        renderTable();
    }
}

function deleteStock(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        stockData.splice(index, 1);
        renderTable();
    }
}



document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    new Chart(document.getElementById('stockChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Feed', 'Medicine', 'Equipment'],
            datasets: [{
                label: 'Stock Quantity',
                data: [500, 250, 100],
                backgroundColor: ['blue', 'green', 'orange']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
    new Chart(document.getElementById('lineChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Stock Variation',
                data: [500, 450, 480, 430],
                borderColor: 'blue',
                fill: false
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});
function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#stockTableBody tr");
    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
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
