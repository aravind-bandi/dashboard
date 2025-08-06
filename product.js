

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
  






const products = [
    { name: "Fresh Cow Milk", category: "Milk", stock: 50, price: "$2.5/L", expiry: "2025-03-10" },
    { name: "Cheddar Cheese", category: "Cheese", stock: 0, price: "$5.0/kg", expiry: "2025-02-15" },
    { name: "Organic Butter", category: "Butter", stock: 5, price: "$4.0/kg", expiry: "2025-04-05" },
    { name: "Greek Yogurt", category: "Yogurt", stock: 30, price: "$3.5/L", expiry: "2025-05-20" },
    { name: "Fresh Cow Milk", category: "Milk", stock: 50, price: "$2.5/L", expiry: "2025-03-10" },
    { name: "Cheddar Cheese", category: "Cheese", stock: 0, price: "$5.0/kg", expiry: "2025-02-15" },
    { name: "Organic Butter", category: "Butter", stock: 5, price: "$4.0/kg", expiry: "2025-04-05" },
    { name: "Greek Yogurt", category: "Yogurt", stock: 30, price: "$3.5/L", expiry: "2025-05-20" }
];

let currentPage = 1;
const itemsPerPage = 3;

function renderTable() {
    let filteredProducts = products.filter(filterLogic);
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let displayedProducts = filteredProducts.slice(start, end);
    
    document.getElementById("productTableBody").innerHTML = displayedProducts.map((p, index) => `
        <tr class="${p.stock === 0 ? 'table-white' : p.stock <= 5 ? 'table-white' : ''}">
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.stock > 0 ? `${p.stock} in stock` : "Out of Stock"}</td>
            <td>${p.price}</td>
            <td>${p.expiry}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editProduct(${start + index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${start + index})">Delete</button>
            </td>
        </tr>
    `).join("");

    renderPagination(filteredProducts.length);
}

function renderPagination(totalItems) {
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    document.getElementById("pagination").innerHTML = `
        <ul class="pagination justify-content-end">
            ${Array.from({ length: totalPages }, (_, i) => `
                <li class="page-item ${i + 1 === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="changePage(${i + 1})">${i + 1}</a>
                </li>
            `).join("")}
        </ul>
    `;
}


function filterLogic(p) {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let stockFilter = document.getElementById("stockFilter").value;

    return (
        p.name.toLowerCase().includes(searchQuery) &&
        (!category || p.category === category) &&
        (!stockFilter || (stockFilter === "in_stock" && p.stock > 5) || 
                         (stockFilter === "low_stock" && p.stock > 0 && p.stock <= 5) || 
                         (stockFilter === "out_stock" && p.stock === 0))
    );
}

function changePage(page) {
    currentPage = page;
    renderTable();
}

function editProduct(index) {
    let p = products[index];
    document.getElementById("editIndex").value = index;
    document.getElementById("editName").value = p.name;
    document.getElementById("editStock").value = p.stock;
    document.getElementById("editPrice").value = p.price;
    new bootstrap.Modal(document.getElementById("editProductModal")).show();
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderTable();
}

document.getElementById("editProductForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let index = document.getElementById("editIndex").value;
    products[index].stock = document.getElementById("editStock").value;
    renderTable();
    bootstrap.Modal.getInstance(document.getElementById("editProductModal")).hide();
});

renderTable();