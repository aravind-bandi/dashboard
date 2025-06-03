const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Milk', 'Curd', 'Butter', 'Ice cream', 'Cheese', 'Other'],
        datasets: [{
            label: 'Orders',
            data: [20, 15, 33, 25, 32, 53],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom', 
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});




  document.addEventListener('DOMContentLoaded', function () {
    // Function to edit order details
    function editOrder(orderId) {
        var name = document.getElementById('order' + orderId + '-name');
        var order = document.getElementById('order' + orderId + '-order');
        var email = document.getElementById('order' + orderId + '-email');
        var price = document.getElementById('order' + orderId + '-price');
        var delivery = document.getElementById('order' + orderId + '-delivery');
        var status = document.getElementById('order' + orderId + '-status');
        var btnSave = document.getElementById('save-order' + orderId);
        var btnEdit = document.getElementById('edit-order' + orderId);

        // Change the content of the order details to editable fields
        name.innerHTML = '<input class="form-control" value="' + name.innerHTML + '">';
        order.innerHTML = '<input class="form-control" value="' + order.innerHTML + '">';
        email.innerHTML = '<input class="form-control" value="' + email.innerHTML + '">';
        price.innerHTML = '<input class="form-control" value="' + price.innerHTML + '">';
        delivery.innerHTML = '<input class="form-control" value="' + delivery.innerHTML + '">';
        status.innerHTML = '<select class="form-select"><option>Pending</option><option>Completed</option><option>Cancelled</option></select>';

        // Show the save button
        btnSave.style.display = 'inline-block';
        btnEdit.style.display = 'none';
    }

    // Function to save the edited order
    function saveOrder(orderId) {
        var name = document.getElementById('order' + orderId + '-name');
        var order = document.getElementById('order' + orderId + '-order');
        var email = document.getElementById('order' + orderId + '-email');
        var price = document.getElementById('order' + orderId + '-price');
        var delivery = document.getElementById('order' + orderId + '-delivery');
        var status = document.getElementById('order' + orderId + '-status');
        var btnSave = document.getElementById('save-order' + orderId);
        var btnEdit = document.getElementById('edit-order' + orderId);

        // Update the order details with new values from input fields
        name.innerHTML = name.querySelector('input').value;
        order.innerHTML = order.querySelector('input').value;
        email.innerHTML = email.querySelector('input').value;
        price.innerHTML = price.querySelector('input').value;
        delivery.innerHTML = delivery.querySelector('input').value;
        status.innerHTML = status.querySelector('select').value;

        // Hide the save button and show the edit button
        btnSave.style.display = 'none';
        btnEdit.style.display = 'inline-block';
    }

    // Attach event listeners for edit/save buttons
    document.getElementById('edit-order1').addEventListener('click', function() { editOrder(1); });
    document.getElementById('save-order1').addEventListener('click', function() { saveOrder(1); });

    document.getElementById('edit-order2').addEventListener('click', function() { editOrder(2); });
    document.getElementById('save-order2').addEventListener('click', function() { saveOrder(2); });

    document.getElementById('edit-order3').addEventListener('click', function() { editOrder(3); });
    document.getElementById('save-order3').addEventListener('click', function() { saveOrder(3); });
});