let users = [
    { name: "Aravind", email: "aravind@example.com", role: "Admin", username: "aravind", password: "********" },
    { name: "arav", email: "arav@example.com", role: "Manager", username: "arav", password: "********" }
];

function renderUsers() {
    let userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = "";
    let adminCount = 0, managerCount = 0, employeeCount = 0;
    users.forEach((user, index) => {
        if (user.role === "Admin") adminCount++;
        if (user.role === "Manager") managerCount++;
        if (user.role === "Employee") employeeCount++;
        userTableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUser(${index})" style="background: linear-gradient(135deg, #6D5BBA, #8D58BF);" >Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})" style="background: linear-gradient(135deg, #FF6F61, #D92027);">Delete</button>
                </td>
            </tr>
        `;
    });
    document.getElementById("totalUsers").innerText = users.length;
    document.getElementById("adminUsers").innerText = adminCount;
    document.getElementById("managerUsers").innerText = managerCount;
    document.getElementById("employeeUsers").innerText = employeeCount;
}

function addActivity(message) {
    let activityLog = document.getElementById("activityLog");
    let li = document.createElement("li");
    li.innerText = message;
    activityLog.prepend(li);
}



renderUsers();


function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        renderUsers();
    }
}


 document.getElementById("userForm").addEventListener("submit", function(event) {
event.preventDefault();
let index = document.getElementById("editIndex").value;
let user = {
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
    role: document.getElementById("userRole").value,
    username: document.getElementById("userUsername").value,
    password: document.getElementById("userPassword").value
};

if (index === "") {
    // Add new user
    users.push(user);
    addActivity(`New user added: ${user.name}`);
} else {
    // Edit existing user
    users[index] = user;
    addActivity(`User updated: ${user.name}`);
}

renderUsers();
resetForm();
bootstrap.Modal.getInstance(document.getElementById("userModal")).hide();
});

function editUser(index) {
let user = users[index];
document.getElementById("editIndex").value = index;
document.getElementById("userName").value = user.name;
document.getElementById("userEmail").value = user.email;
document.getElementById("userRole").value = user.role;
document.getElementById("userUsername").value = user.username;
document.getElementById("userPassword").value = user.password;
document.getElementById("userModalLabel").innerText = "Edit User";
new bootstrap.Modal(document.getElementById("userModal")).show();
}

function resetForm() {
document.getElementById("editIndex").value = "";
document.getElementById("userForm").reset();
document.getElementById("userModalLabel").innerText = "Add User";
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
