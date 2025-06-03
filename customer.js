$(document).ready(function () {
    var customers = [];
    var orderHistory = {};
    var names = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Daniel Brown", "Olivia Wilson", "James Taylor", "Sophia Martinez", "Benjamin Anderson", "Charlotte Thomas", "Liam White", "Ava Harris", "William Martin", "Mia Thompson", "Ethan Garcia", "Amelia Robinson", "Alexander Clark", "Isabella Lewis", "Henry Walker", "Grace Hall"];
    var addresses = ["123 Main St, Springfield", "456 Elm St, Rivertown", "789 Oak St, Lakeside", "101 Pine St, Hilltop", "202 Maple St, Brookside", "303 Cedar St, Greenfield", "404 Birch St, Meadowview", "505 Walnut St, Sunnyside", "606 Cherry St, Riverbend", "707 Willow St, Mountainview", "808 Ash St, Redwood", "909 Fir St, Lakewood", "111 Spruce St, Pinehill", "222 Poplar St, Blueberry", "333 Sycamore St, Autumnridge", "444 Magnolia St, Silverlake", "555 Palm St, Goldenvalley", "666 Juniper St, Rosewood", "777 Cypress St, Clearview", "888 Hickory St, Everdale"];
    
    for (var i = 0; i < 20; i++) {
        var customer = {
            name: names[i],
            address: addresses[i],
            product: ["Milk", "Cheese", "Butter", "Yogurt"][i % 4],
            amount: (Math.random() * 50).toFixed(2),
            status: ["Pending", "Shipped", "Delivered"][i % 3]
        };
        customers.push(customer);
        
        orderHistory[names[i]] = [];
        for (var j = 1; j <= 3; j++) {
            orderHistory[names[i]].push({
                id: 9000 + i * 10 + j,
                product: ["Milk", "Cheese", "Butter", "Yogurt"][j % 4],
                amount: (Math.random() * 50).toFixed(2),
                status: ["Pending", "Shipped", "Delivered"][j % 3]
            });
        }
    }

    function renderTable(page = 1) {
        var rowsPerPage = 5;
        var tableBody = $('#customerTable');
        tableBody.empty();
        
        var start = (page - 1) * rowsPerPage;
        var end = start + rowsPerPage;
        var displayedCustomers = customers.slice(start, end);
        
        displayedCustomers.forEach((c, index) => {
            tableBody.append(`<tr data-name="${c.name}" data-address="${c.address}">
                <td>${start + index + 1}</td>
                <td class="customer-name">${c.name}</td>
                <td>${c.address}</td>
                <td>${c.product}</td>
                <td>${c.amount}</td>
                <td><span class="badge bg-${c.status === 'Delivered' ? 'success' : c.status === 'Shipped' ? 'info' : 'warning'}">${c.status}</span></td>
            </tr>`);
        });
    }

    function setupPagination() {
        var rowsPerPage = 5;
        var totalPages = Math.ceil(customers.length / rowsPerPage);
        var pagination = $('#pagination');
        pagination.empty();
        for (var i = 1; i <= totalPages; i++) {
            pagination.append(`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
        }
        pagination.find('a').click(function (e) {
            e.preventDefault();
            var page = $(this).text();
            renderTable(page);
            pagination.find('li').removeClass('active');
            $(this).parent().addClass('active');
        });
        renderTable(1);
        pagination.find('li:first').addClass('active');
    }

    $(document).on('click', '.customer-name', function (e) {
        e.preventDefault();
        var row = $(this).closest('tr');
        var customerName = row.data('name');
        
        $('#customerName').text(customerName);
        $('#customerAddress').text(row.data('address'));
        $('#profileCustomerName').text(customerName);
        
        var recentOrders = $('#recentOrders');
        recentOrders.empty();
        
        if (orderHistory[customerName]) {
            orderHistory[customerName].forEach(order => {
                recentOrders.append(`<tr>
                    <td>#${order.id}</td>
                    <td>${order.product}</td>
                    <td>${order.amount}</td>
                    <td><span class="badge bg-${order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'info' : 'warning'}">${order.status}</span></td>
                </tr>`);
            });
        }
        
        $('#profileSection').fadeIn();
    });

    setupPagination();
});



// Sample Data for Top Customers
const topCustomers = [
    { name: "John Doe", orders: 15, photo: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", orders: 12, photo: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Michael Johnson", orders: 10, photo: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Emily Brown", orders: 9, photo: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "David Wilson", orders: 8, photo: "https://randomuser.me/api/portraits/men/5.jpg" }
];

// Populate Top Customers List
const customerList = document.getElementById("topCustomers");
topCustomers.forEach(customer => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex align-items-center";
    listItem.innerHTML = `
        <img src="${customer.photo}" class="rounded-circle me-3" width="50" height="50" alt="Customer">
        <div>
            <strong>${customer.name}</strong> <br>
            <span class="text-muted">Orders: ${customer.orders}</span>
        </div>
    `;
    customerList.appendChild(listItem);
});

// Sales Data
const salesData = {
    daily: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], data: [20, 35, 40, 30, 50, 60, 70] },
    weekly: { labels: ["Week 1", "Week 2", "Week 3", "Week 4"], data: [200, 250, 300, 350] },
    monthly: { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], data: [1000, 1200, 1500, 1300, 1600, 1800] },
    yearly: { labels: ["2020", "2021", "2022", "2023", "2024"], data: [12000, 15000, 17000, 19000, 20000] }
};

// Initial Chart
const ctx = document.getElementById('customerChart').getContext('2d');
let customerChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: salesData.daily.labels,
        datasets: [{
            label: 'Orders',
            data: salesData.daily.data,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,  // Ensure legend is visible
                position: 'bottom' // Moves the labels below the chart
            }
        }
    }
});


// Update Chart Function
function updateChart() {
    let timeFilter = document.getElementById("timeFilter").value;
    customerChart.data.labels = salesData[timeFilter].labels;
    customerChart.data.datasets[0].data = salesData[timeFilter].data;
    customerChart.update();
}

  // Initialize charts variable to store chart instances
  let charts = {
    consumption: null,
    payment: null,
    yearly: null
};

// Edit Profile Functionality
document.getElementById('edit-profile-btn').addEventListener('click', function() {
    document.getElementById('profile-view').style.display = 'none';
    document.getElementById('profile-edit').style.display = 'block';
    document.getElementById('edit-profile-btn').style.display = 'none';
    document.getElementById('save-profile-btn').style.display = 'inline-block';
    document.getElementById('cancel-edit-btn').style.display = 'inline-block';
    
    // Show edit mode for delivery schedule
    document.querySelectorAll('.view-mode').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.edit-mode').forEach(el => el.style.display = 'block');
});

document.getElementById('cancel-edit-btn').addEventListener('click', function() {
    document.getElementById('profile-view').style.display = 'block';
    document.getElementById('profile-edit').style.display = 'none';
    document.getElementById('edit-profile-btn').style.display = 'inline-block';
    document.getElementById('save-profile-btn').style.display = 'none';
    document.getElementById('cancel-edit-btn').style.display = 'none';
    
    // Show view mode for delivery schedule
    document.querySelectorAll('.view-mode').forEach(el => el.style.display = 'inline');
    document.querySelectorAll('.edit-mode').forEach(el => el.style.display = 'none');
});

document.getElementById('save-profile-btn').addEventListener('click', function() {
    // Update profile info with edited values
    document.getElementById('profile-name').textContent = document.getElementById('edit-name').value;
    document.getElementById('profile-phone').textContent = document.getElementById('edit-phone').value;
    document.getElementById('profile-email').textContent = document.getElementById('edit-email').value;
    document.getElementById('profile-address').textContent = document.getElementById('edit-address').value;
    document.getElementById('profile-payment').textContent = document.getElementById('edit-payment').value;
    
    // Update delivery schedule view mode with edited values
    document.querySelectorAll('.edit-mode').forEach((el, index) => {
        if (el.tagName === 'SELECT') {
            const selectedOption = el.options[el.selectedIndex].text;
            document.querySelectorAll('.view-mode')[index].textContent = selectedOption;
        } else if (el.tagName === 'INPUT') {
            document.querySelectorAll('.view-mode')[index].textContent = el.value;
        }
    });
    
    // Switch back to view mode
    document.getElementById('profile-view').style.display = 'block';
    document.getElementById('profile-edit').style.display = 'none';
    document.getElementById('edit-profile-btn').style.display = 'inline-block';
    document.getElementById('save-profile-btn').style.display = 'none';
    document.getElementById('cancel-edit-btn').style.display = 'none';
    
    document.querySelectorAll('.view-mode').forEach(el => el.style.display = 'inline');
    document.querySelectorAll('.edit-mode').forEach(el => el.style.display = 'none');
    
    // Show success message
    alert('Profile updated successfully!');
});

// Avatar upload functionality
document.querySelector('.btn-upload').addEventListener('click', function() {
    document.getElementById('avatar-input').click();
});

document.getElementById('avatar-input').addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('avatar-preview').src = event.target.result;
            document.getElementById('profile-avatar').src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

// Add new note functionality
document.getElementById('add-note-btn').addEventListener('click', function() {
    const noteText = document.getElementById('new-note').value;
    if (noteText.trim() === '') return;
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const newNote = document.createElement('div');
    newNote.className = 'list-group-item';
    newNote.innerHTML = `
        <div class="d-flex justify-content-between">
            <strong>New Note</strong>
            <small class="text-muted">${dateStr}</small>
        </div>
        <p class="mb-0 mt-1">${noteText}</p>
        <div class="d-flex justify-content-end mt-2">
            <button class="btn btn-sm btn-outline-secondary me-1">Edit</button>
            <button class="btn btn-sm btn-outline-danger">Delete</button>
        </div>
    `;
    
    document.getElementById('notes-list').prepend(newNote);
    document.getElementById('new-note').value = '';
    
    // Update notification badge
    const badge = document.querySelector('.notification-badge');
    badge.textContent = parseInt(badge.textContent) + 1;
});

// Notification modal
document.getElementById('send-notification-btn').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('notificationModal'));
    modal.show();
});

// Back button
document.getElementById('back-btn').addEventListener('click', function() {
    // In a real app, this would navigate back to the customer list
    alert('Navigating back to customer list');
});

// Initialize charts when analytics tab is shown
document.getElementById('pills-analytics-tab').addEventListener('shown.bs.tab', function() {
    initCharts();
});

function initCharts() {
    // Destroy existing charts if they exist
    if (charts.consumption) charts.consumption.destroy();
    if (charts.payment) charts.payment.destroy();
    if (charts.yearly) charts.yearly.destroy();
    
    // Consumption Chart
    const consumptionCtx = document.getElementById('consumptionChart').getContext('2d');
    charts.consumption = new Chart(consumptionCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Liters',
                data: [56, 58, 62, 60, 64, 32],
                backgroundColor: 'rgba(108, 74, 182, 0.7)',
                borderColor: 'rgba(108, 74, 182, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Payment Chart
    const paymentCtx = document.getElementById('paymentChart').getContext('2d');
    charts.payment = new Chart(paymentCtx, {
        type: 'doughnut',
        data: {
            labels: ['On Time', 'Late', 'Pending'],
            datasets: [{
                data: [15, 2, 1],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 99, 132, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Yearly Chart
    const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');
    charts.yearly = new Chart(yearlyCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Orders',
                data: [24, 22, 26, 25, 28, 14, 0, 0, 0, 0, 0, 0],
                fill: false,
                backgroundColor: 'rgba(108, 74, 182, 0.7)',
                borderColor: 'rgba(108, 74, 182, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize charts on page load if analytics tab is active (for demo purposes)
document.addEventListener('DOMContentLoaded', function() {
    // Check if analytics tab is active
    if (document.getElementById('pills-analytics-tab').classList.contains('active')) {
        initCharts();
    }
    
    // Add resize observer to handle window resizing
    const resizeObserver = new ResizeObserver(() => {
        if (charts.consumption) charts.consumption.resize();
        if (charts.payment) charts.payment.resize();
        if (charts.yearly) charts.yearly.resize();
    });
    
    // Observe the analytics tab content
    const analyticsTab = document.getElementById('pills-analytics');
    if (analyticsTab) {
        resizeObserver.observe(analyticsTab);
    }
});