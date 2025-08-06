 // Sample log data
        const allLogs = [
            { id: 1, action: "User created John Doe with Sales role", user: "Admin User", time: "Today, 10:45 AM", ip: "192.168.1.45", date: new Date() },
            { id: 2, action: "Permission updated for Sales Team", user: "Admin User", time: "Today, 09:30 AM", ip: "192.168.1.45", date: new Date() },
            { id: 3, action: "Failed login attempt for mike@example.com", user: "System", time: "Today, 08:15 AM", ip: "45.23.67.189 (Blocked after 3 attempts)", date: new Date() },
            { id: 4, action: "Password changed for Sarah Johnson", user: "Sarah Johnson", time: "Yesterday, 5:30 PM", ip: "192.168.1.32", date: new Date(Date.now() - 86400000) },
            { id: 5, action: "Role assigned Delivery to Robert Chen", user: "Admin User", time: "Yesterday, 3:45 PM", ip: "192.168.1.45", date: new Date(Date.now() - 86400000) },
            { id: 6, action: "User deleted Michael Scott", user: "Admin User", time: "2 days ago, 2:15 PM", ip: "192.168.1.45", date: new Date(Date.now() - 2 * 86400000) },
            { id: 7, action: "New role Support created", user: "Admin User", time: "3 days ago, 11:20 AM", ip: "192.168.1.45", date: new Date(Date.now() - 3 * 86400000) },
            { id: 8, action: "System settings updated", user: "Admin User", time: "5 days ago, 4:30 PM", ip: "192.168.1.45", date: new Date(Date.now() - 5 * 86400000) },
            { id: 9, action: "User logged in from new device", user: "John Smith", time: "1 week ago, 9:15 AM", ip: "203.45.67.89", date: new Date(Date.now() - 7 * 86400000) },
            { id: 10, action: "Failed login attempt for admin@example.com", user: "System", time: "2 weeks ago, 10:45 PM", ip: "89.45.23.67 (Blocked after 3 attempts)", date: new Date(Date.now() - 14 * 86400000) },
            { id: 11, action: "Database backup completed", user: "System", time: "3 weeks ago, 2:00 AM", ip: "localhost", date: new Date(Date.now() - 21 * 86400000) },
            { id: 12, action: "New user onboarding completed", user: "Admin User", time: "1 month ago, 3:30 PM", ip: "192.168.1.45", date: new Date(Date.now() - 30 * 86400000) }
        ];

        // Current page and filter state
        let currentLogPage = 1;
        const logsPerPage = 5;
        let currentTimeFilter = 'week';

        // Function to filter logs by time period
        function filterLogsByTime(logs, timeFilter) {
            const now = new Date();
            switch(timeFilter) {
                case 'today':
                    return logs.filter(log => {
                        return log.date.toDateString() === now.toDateString();
                    });
                case 'week':
                    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    return logs.filter(log => log.date >= oneWeekAgo);
                case 'month':
                    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    return logs.filter(log => log.date >= oneMonthAgo);
                case 'all':
                default:
                    return logs;
            }
        }

        // Function to render logs
        function renderLogs() {
            const logContainer = document.getElementById('logContainer');
            logContainer.innerHTML = '';
            
            // Filter logs
            const filteredLogs = filterLogsByTime(allLogs, currentTimeFilter);
            
            // Paginate logs
            const startIndex = (currentLogPage - 1) * logsPerPage;
            const endIndex = startIndex + logsPerPage;
            const paginatedLogs = filteredLogs.slice(startIndex, endIndex);
            
            // Render logs
            if (paginatedLogs.length === 0) {
                logContainer.innerHTML = '<div class="text-center py-4 text-muted">No logs found for the selected time period</div>';
            } else {
                paginatedLogs.forEach(log => {
                    const logEntry = document.createElement('div');
                    logEntry.className = 'log-entry';
                    logEntry.innerHTML = `
                        <h6>${log.action}</h6>
                        <p class="mb-1">${log.user} - ${log.time}</p>
                        <p class="log-time">IP: ${log.ip}</p>
                    `;
                    logContainer.appendChild(logEntry);
                });
            }
            
            // Update pagination info
            updatePaginationInfo(filteredLogs.length);
            renderPagination(filteredLogs.length);
        }

        // Function to update pagination info text
        function updatePaginationInfo(totalLogs) {
            const startIndex = (currentLogPage - 1) * logsPerPage + 1;
            const endIndex = Math.min(startIndex + logsPerPage - 1, totalLogs);
            document.getElementById('logCountInfo').textContent = 
                `Showing ${startIndex} to ${endIndex} of ${totalLogs} entries`;
        }

        // Function to render pagination
        function renderPagination(totalLogs) {
            const totalPages = Math.ceil(totalLogs / logsPerPage);
            const paginationContainer = document.getElementById('logPagination');
            paginationContainer.innerHTML = '';
            
            // Previous button
            const prevItem = document.createElement('li');
            prevItem.className = `page-item ${currentLogPage === 1 ? 'disabled' : ''}`;
            prevItem.innerHTML = `<a class="page-link" href="#" tabindex="-1">Previous</a>`;
            prevItem.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentLogPage > 1) {
                    currentLogPage--;
                    renderLogs();
                }
            });
            paginationContainer.appendChild(prevItem);
            
            // Page numbers
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentLogPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            if (startPage > 1) {
                const firstPageItem = document.createElement('li');
                firstPageItem.className = 'page-item';
                firstPageItem.innerHTML = `<a class="page-link" href="#" data-page="1">1</a>`;
                firstPageItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentLogPage = 1;
                    renderLogs();
                });
                paginationContainer.appendChild(firstPageItem);
                
                if (startPage > 2) {
                    const ellipsisItem = document.createElement('li');
                    ellipsisItem.className = 'page-item disabled';
                    ellipsisItem.innerHTML = `<span class="page-link">...</span>`;
                    paginationContainer.appendChild(ellipsisItem);
                }
            }
            
            for (let i = startPage; i <= endPage; i++) {
                const pageItem = document.createElement('li');
                pageItem.className = `page-item ${i === currentLogPage ? 'active' : ''}`;
                pageItem.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
                pageItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentLogPage = i;
                    renderLogs();
                });
                paginationContainer.appendChild(pageItem);
            }
            
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    const ellipsisItem = document.createElement('li');
                    ellipsisItem.className = 'page-item disabled';
                    ellipsisItem.innerHTML = `<span class="page-link">...</span>`;
                    paginationContainer.appendChild(ellipsisItem);
                }
                
                const lastPageItem = document.createElement('li');
                lastPageItem.className = 'page-item';
                lastPageItem.innerHTML = `<a class="page-link" href="#" data-page="${totalPages}">${totalPages}</a>`;
                lastPageItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentLogPage = totalPages;
                    renderLogs();
                });
                paginationContainer.appendChild(lastPageItem);
            }
            
            // Next button
            const nextItem = document.createElement('li');
            nextItem.className = `page-item ${currentLogPage === totalPages ? 'disabled' : ''}`;
            nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
            nextItem.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentLogPage < totalPages) {
                    currentLogPage++;
                    renderLogs();
                }
            });
            paginationContainer.appendChild(nextItem);
        }

        // Initialize logs
        document.addEventListener('DOMContentLoaded', function() {
            renderLogs();
            
            // Time filter change event
            document.getElementById('logTimeFilter').addEventListener('change', function() {
                currentTimeFilter = this.value;
                currentLogPage = 1; // Reset to first page when filter changes
                renderLogs();
            });
        });

        // View User functionality
        document.querySelectorAll('.view-user').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                // In a real app, you would fetch user data based on userId
                // For demo, we'll use static data
                const userData = {
                    id: userId,
                    name: this.closest('tr').querySelector('td:nth-child(1)').textContent,
                    email: this.closest('tr').querySelector('td:nth-child(2)').textContent,
                    role: this.closest('tr').querySelector('td:nth-child(3) span').textContent,
                    status: this.closest('tr').querySelector('td:nth-child(4) span').textContent,
                    lastActive: this.closest('tr').querySelector('td:nth-child(5)').textContent,
                    joined: 'January 15, 2023'
                };
                
                document.getElementById('viewUserName').textContent = userData.name;
                document.getElementById('viewUserEmail').textContent = userData.email;
                document.getElementById('viewUserRole').textContent = userData.role;
                document.getElementById('viewUserStatus').textContent = userData.status;
                document.getElementById('viewUserLastActive').textContent = userData.lastActive;
                document.getElementById('viewUserJoined').textContent = userData.joined;
                
                // Set badge class based on role
                const roleBadge = document.getElementById('viewUserRole');
                roleBadge.className = 'badge';
                if(userData.role === 'Admin') roleBadge.classList.add('badge-admin');
                else if(userData.role === 'Sales') roleBadge.classList.add('badge-sales');
                else if(userData.role === 'Delivery') roleBadge.classList.add('badge-delivery');
                else if(userData.role === 'Support') roleBadge.classList.add('badge-support');
                
                // Set status badge color
                const statusBadge = document.getElementById('viewUserStatus');
                statusBadge.className = 'badge';
                if(userData.status === 'Active') statusBadge.classList.add('bg-success');
                else if(userData.status === 'Pending') statusBadge.classList.add('bg-warning', 'text-dark');
                else if(userData.status === 'Inactive') statusBadge.classList.add('bg-secondary');
                
                // Show modal
                const viewModal = new bootstrap.Modal(document.getElementById('viewUserModal'));
                viewModal.show();
            });
        });
        
        // Edit User functionality
        document.querySelectorAll('.edit-user').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                // In a real app, you would fetch user data based on userId
                // For demo, we'll use static data
                const userData = {
                    id: userId,
                    name: this.closest('tr').querySelector('td:nth-child(1)').textContent,
                    email: this.closest('tr').querySelector('td:nth-child(2)').textContent,
                    role: this.closest('tr').querySelector('td:nth-child(3) span').textContent,
                    status: this.closest('tr').querySelector('td:nth-child(4) span').textContent
                };
                
                document.getElementById('editUserId').value = userData.id;
                document.getElementById('editUserName').value = userData.name;
                document.getElementById('editUserEmail').value = userData.email;
                document.getElementById('editUserRole').value = userData.role.toLowerCase();
                document.getElementById('editUserStatus').value = userData.status.toLowerCase();
                
                // Show modal
                const editModal = new bootstrap.Modal(document.getElementById('editUserModal'));
                editModal.show();
            });
        });
        
        // Update User functionality
        document.getElementById('updateUser').addEventListener('click', function() {
            // In a real app, you would send this data to the server
            alert('User updated successfully!');
            const editModal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
            editModal.hide();
            
            // For demo, we'll just reload the page
            setTimeout(() => location.reload(), 1000);
        });
        
        // Delete User functionality
        document.querySelectorAll('.delete-user').forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                const userName = this.closest('tr').querySelector('td:nth-child(1)').textContent;
                const userEmail = this.closest('tr').querySelector('td:nth-child(2)').textContent;
                
                document.getElementById('deleteUserName').textContent = `${userName} (${userEmail})`;
                document.getElementById('confirmDelete').setAttribute('data-user-id', userId);
                
                // Show modal
                const deleteModal = new bootstrap.Modal(document.getElementById('deleteUserModal'));
                deleteModal.show();
            });
        });
        
        // Confirm Delete functionality
        document.getElementById('confirmDelete').addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            // In a real app, you would send this to the server
            alert(`User with ID ${userId} deleted successfully!`);
            const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteUserModal'));
            deleteModal.hide();
            
            // For demo, we'll just reload the page
            setTimeout(() => location.reload(), 1000);
        });
        
        // Add User functionality
        document.getElementById('saveUser').addEventListener('click', function() {
            // In a real app, you would send this data to the server
            alert('New user added successfully!');
            const addModal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
            addModal.hide();
            
            // For demo, we'll just reload the page
            setTimeout(() => location.reload(), 1000);
        });