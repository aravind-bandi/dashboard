 $(document).ready(function() {
        // Sample data for invoices
        const invoices = [
            {
                id: 1,
                number: 'INV-2023-001',
                customer: 'Acme Corporation',
                date: '2023-05-15',
                dueDate: '2023-06-14',
                amount: 1100.00,
                status: 'pending',
                items: [
                    { name: 'Product A', description: 'Premium widget', quantity: 2, price: 400.00, tax: 10, total: 880.00 },
                    { name: 'Service X', description: 'Monthly maintenance', quantity: 1, price: 200.00, tax: 10, total: 220.00 }
                ],
                subtotal: 1000.00,
                tax: 100.00,
                discount: 0.00,
                total: 1100.00,
                notes: 'Thank you for your business. Payment is due within 30 days.',
                payments: [
                    { date: '2023-05-30', amount: 500.00, method: 'Credit Card', reference: 'CC-456123' }
                ]
            },
            {
                id: 2,
                number: 'INV-2023-002',
                customer: 'Globex Inc.',
                date: '2023-05-20',
                dueDate: '2023-06-19',
                amount: 2500.00,
                status: 'paid',
                items: [
                    { name: 'Product B', description: 'Deluxe package', quantity: 1, price: 2000.00, tax: 10, total: 2200.00 },
                    { name: 'Service Y', description: 'Installation', quantity: 1, price: 300.00, tax: 10, total: 330.00 }
                ],
                subtotal: 2300.00,
                tax: 230.00,
                discount: 30.00,
                total: 2500.00,
                notes: 'Special discount applied for bulk order.',
                payments: [
                    { date: '2023-06-10', amount: 2500.00, method: 'Bank Transfer', reference: 'TRX-789456' }
                ]
            },
            {
                id: 3,
                number: 'INV-2023-003',
                customer: 'Soylent Corp',
                date: '2023-04-01',
                dueDate: '2023-05-01',
                amount: 750.00,
                status: 'overdue',
                items: [
                    { name: 'Product C', description: 'Basic item', quantity: 3, price: 200.00, tax: 10, total: 660.00 },
                    { name: 'Service X', description: 'Setup fee', quantity: 1, price: 30.00, tax: 10, total: 33.00 }
                ],
                subtotal: 630.00,
                tax: 60.00,
                discount: 0.00,
                total: 690.00,
                notes: 'Payment overdue. Please settle immediately to avoid service interruption.',
                payments: []
            },
            {
                id: 4,
                number: 'INV-2023-004',
                customer: 'Initech',
                date: '2023-06-01',
                dueDate: '2023-07-01',
                amount: 1800.00,
                status: 'pending',
                items: [
                    { name: 'Service Y', description: 'Annual subscription', quantity: 1, price: 1500.00, tax: 10, total: 1650.00 },
                    { name: 'Product A', description: 'Add-on license', quantity: 1, price: 150.00, tax: 10, total: 165.00 }
                ],
                subtotal: 1650.00,
                tax: 150.00,
                discount: 0.00,
                total: 1800.00,
                notes: 'Recurring annual service contract.',
                payments: []
            }
        ];

        // Sample data for payments
        const payments = [
            {
                id: 1,
                invoiceNumber: 'INV-2023-002',
                invoiceId: 2,
                customer: 'Globex Inc.',
                date: '2023-06-10',
                amount: 2500.00,
                method: 'Bank Transfer',
                status: 'completed',
                reference: 'TRX-789456'
            },
            {
                id: 2,
                invoiceNumber: 'INV-2023-001',
                invoiceId: 1,
                customer: 'Acme Corporation',
                date: '2023-05-30',
                amount: 500.00,
                method: 'Credit Card',
                status: 'completed',
                reference: 'CC-456123'
            },
            {
                id: 3,
                invoiceNumber: 'INV-2023-003',
                invoiceId: 3,
                customer: 'Soylent Corp',
                date: '2023-05-05',
                amount: 300.00,
                method: 'Check',
                status: 'pending',
                reference: 'CHK-852369'
            }
        ];

        // Sample data for receivables
        const receivables = [
            {
                customer: 'Acme Corporation',
                totalOutstanding: 1100.00,
                current: 1100.00,
                days1_30: 0.00,
                days31_60: 0.00,
                daysOver60: 0.00
            },
            {
                customer: 'Globex Inc.',
                totalOutstanding: 0.00,
                current: 0.00,
                days1_30: 0.00,
                days31_60: 0.00,
                daysOver60: 0.00
            },
            {
                customer: 'Soylent Corp',
                totalOutstanding: 750.00,
                current: 0.00,
                days1_30: 0.00,
                days31_60: 750.00,
                daysOver60: 0.00
            },
            {
                customer: 'Initech',
                totalOutstanding: 1800.00,
                current: 1800.00,
                days1_30: 0.00,
                days31_60: 0.00,
                daysOver60: 0.00
            },
            {
                customer: 'Umbrella Corporation',
                totalOutstanding: 3200.00,
                current: 1200.00,
                days1_30: 1000.00,
                days31_60: 1000.00,
                daysOver60: 0.00
            }
        ];

        // Populate invoices table
        function populateInvoicesTable() {
            const tbody = $('#invoicesTable tbody');
            tbody.empty();
            
            invoices.forEach(invoice => {
                let statusClass = '';
                let statusText = '';
                
                if (invoice.status === 'pending') {
                    statusClass = 'status-pending';
                    statusText = 'Pending';
                } else if (invoice.status === 'paid') {
                    statusClass = 'status-paid';
                    statusText = 'Paid';
                } else if (invoice.status === 'overdue') {
                    statusClass = 'status-overdue';
                    statusText = 'Overdue';
                }
                
                const paidAmount = invoice.payments.reduce((sum, payment) => sum + payment.amount, 0);
                const balanceDue = invoice.total - paidAmount;
                
                const row = `
                    <tr>
                        <td>${invoice.number}</td>
                        <td>${invoice.customer}</td>
                        <td>${formatDate(invoice.date)}</td>
                        <td>${formatDate(invoice.dueDate)}</td>
                        <td>$${invoice.total.toFixed(2)}</td>
                        <td><span class="${statusClass}">${statusText}</span></td>
                        <td>
                            <button class="btn btn-sm btn-primary view-invoice" data-id="${invoice.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-success send-invoice" data-id="${invoice.id}">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                            <button class="btn btn-sm btn-danger delete-invoice" data-id="${invoice.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        }

        // Populate payments table
        function populatePaymentsTable() {
            const tbody = $('#paymentsTable tbody');
            tbody.empty();
            
            payments.forEach(payment => {
                let statusClass = '';
                let statusText = '';
                
                if (payment.status === 'completed') {
                    statusClass = 'status-paid';
                    statusText = 'Completed';
                } else if (payment.status === 'pending') {
                    statusClass = 'status-pending';
                    statusText = 'Pending';
                }
                
                const row = `
                    <tr>
                        <td>PY-${payment.id.toString().padStart(3, '0')}</td>
                        <td>${payment.invoiceNumber}</td>
                        <td>${payment.customer}</td>
                        <td>${formatDate(payment.date)}</td>
                        <td>$${payment.amount.toFixed(2)}</td>
                        <td>${payment.method}</td>
                        <td><span class="${statusClass}">${statusText}</span></td>
                        <td>
                            <button class="btn btn-sm btn-primary view-payment" data-id="${payment.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-danger delete-payment" data-id="${payment.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        }

        // Populate receivables table
        function populateReceivablesTable() {
            const tbody = $('#receivablesTable tbody');
            tbody.empty();
            
            receivables.forEach(receivable => {
                const row = `
                    <tr>
                        <td>${receivable.customer}</td>
                        <td>$${receivable.totalOutstanding.toFixed(2)}</td>
                        <td>$${receivable.current.toFixed(2)}</td>
                        <td>$${receivable.days1_30.toFixed(2)}</td>
                        <td>$${receivable.days31_60.toFixed(2)}</td>
                        <td>$${receivable.daysOver60.toFixed(2)}</td>
                        <td>
                            <button class="btn btn-sm btn-primary view-customer" data-customer="${receivable.customer}">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        }

        // Format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Calculate item total
        function calculateItemTotal(row) {
            const quantity = parseFloat(row.find('.quantity').val()) || 0;
            const price = parseFloat(row.find('.price').val()) || 0;
            const taxRate = parseFloat(row.find('.tax').val()) || 0;
            
            const subtotal = quantity * price;
            const taxAmount = subtotal * (taxRate / 100);
            const total = subtotal + taxAmount;
            
            row.find('.item-total').text('$' + total.toFixed(2));
            return total;
        }

        // Calculate invoice totals
        function calculateInvoiceTotals() {
            let subtotal = 0;
            
            $('#itemsTable tbody tr').each(function() {
                const row = $(this);
                const quantity = parseFloat(row.find('.quantity').val()) || 0;
                const price = parseFloat(row.find('.price').val()) || 0;
                subtotal += quantity * price;
            });
            
            const taxRate = 10; // Default tax rate
            const taxAmount = subtotal * (taxRate / 100);
            
            const discountPercent = parseFloat($('#discountPercent').val()) || 0;
            const discountAmount = subtotal * (discountPercent / 100);
            
            const total = subtotal + taxAmount - discountAmount;
            
            $('#subtotal').text('$' + subtotal.toFixed(2));
            $('#taxAmount').text('$' + taxAmount.toFixed(2));
            $('#discountAmount').text('$' + discountAmount.toFixed(2));
            $('#totalAmount').text('$' + total.toFixed(2));
        }

        // Initialize date fields with today's date
        const today = new Date().toISOString().split('T')[0];
        $('#invoiceDate').val(today);
        $('#paymentDate').val(today);
        
        // Set due date to 30 days from today
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 30);
        $('#dueDate').val(dueDate.toISOString().split('T')[0]);

        // Populate tables on page load
        populateInvoicesTable();
        populatePaymentsTable();
        populateReceivablesTable();

        // Add item row
        $('#addItemBtn').click(function() {
            const newRow = `
                <tr>
                    <td>
                        <select class="form-select item-select">
                            <option value="" selected disabled>Select Item</option>
                            <option value="1">Product A</option>
                            <option value="2">Product B</option>
                            <option value="3">Product C</option>
                            <option value="4">Service X</option>
                            <option value="5">Service Y</option>
                        </select>
                    </td>
                    <td><input type="text" class="form-control description" placeholder="Description"></td>
                    <td><input type="number" class="form-control quantity" value="1" min="1"></td>
                    <td><input type="number" class="form-control price" placeholder="0.00" step="0.01"></td>
                    <td>
                        <select class="form-select tax">
                            <option value="0">No Tax</option>
                            <option value="10" selected>GST 10%</option>
                            <option value="18">VAT 18%</option>
                        </select>
                    </td>
                    <td class="item-total">$0.00</td>
                    <td><button type="button" class="btn btn-sm btn-danger remove-item"><i class="fas fa-trash"></i></button></td>
                </tr>
            `;
            $('#itemsTable tbody').append(newRow);
        });

        // Remove item row
        $(document).on('click', '.remove-item', function() {
            $(this).closest('tr').remove();
            calculateInvoiceTotals();
        });

        // Calculate item total when quantity, price or tax changes
        $(document).on('change', '.quantity, .price, .tax', function() {
            const row = $(this).closest('tr');
            calculateItemTotal(row);
            calculateInvoiceTotals();
        });

        // Calculate totals when discount changes
        $('#discountPercent').on('change', function() {
            calculateInvoiceTotals();
        });

        // Preview invoice
        $('#previewInvoiceBtn').click(function() {
            const customerSelect = $('#customerSelect option:selected');
            const customerName = customerSelect.text();
            const invoiceDate = $('#invoiceDate').val();
            const dueDate = $('#dueDate').val();
            const invoiceNumber = $('#invoiceNumber').val();
            const notes = $('#notes').val();
            
            // Update preview modal with form data
            $('#previewCustomerName').text(customerName);
            $('#previewInvoiceDate').text(formatDate(invoiceDate));
            $('#previewDueDate').text(formatDate(dueDate));
            $('#previewInvoiceNumber').text(invoiceNumber);
            $('#previewNotes').text(notes || 'No notes provided.');
            
            // Populate items table in preview
            const itemsTbody = $('#previewItemsTable');
            itemsTbody.empty();
            
            let subtotal = 0;
            
            $('#itemsTable tbody tr').each(function() {
                const row = $(this);
                const item = row.find('.item-select option:selected').text();
                const description = row.find('.description').val() || 'No description';
                const quantity = row.find('.quantity').val() || 0;
                const price = parseFloat(row.find('.price').val()) || 0;
                const taxRate = parseFloat(row.find('.tax').val()) || 0;
                
                const rowSubtotal = quantity * price;
                subtotal += rowSubtotal;
                
                const taxAmount = rowSubtotal * (taxRate / 100);
                const total = rowSubtotal + taxAmount;
                
                const itemRow = `
                    <tr>
                        <td>${item}</td>
                        <td>${description}</td>
                        <td>${quantity}</td>
                        <td>$${price.toFixed(2)}</td>
                        <td>${taxRate}%</td>
                        <td>$${total.toFixed(2)}</td>
                    </tr>
                `;
                itemsTbody.append(itemRow);
            });
            
            const taxRate = 10; // Default tax rate
            const taxAmount = subtotal * (taxRate / 100);
            
            const discountPercent = parseFloat($('#discountPercent').val()) || 0;
            const discountAmount = subtotal * (discountPercent / 100);
            
            const total = subtotal + taxAmount - discountAmount;
            
            $('#previewSubtotal').text('$' + subtotal.toFixed(2));
            $('#previewTax').text('$' + taxAmount.toFixed(2));
            $('#previewDiscount').text('$' + discountAmount.toFixed(2));
            $('#previewTotal').text('$' + total.toFixed(2));
            $('#previewAmountDue').text('$' + total.toFixed(2));
            
            // Show preview modal
            $('#invoicePreviewModal').modal('show');
        });

        // View invoice details
        $(document).on('click', '.view-invoice', function() {
            const invoiceId = $(this).data('id');
            const invoice = invoices.find(i => i.id === invoiceId);
            
            if (invoice) {
                $('#viewInvoiceNumber').text(invoice.number);
                $('#viewInvoiceDate').text(formatDate(invoice.date));
                $('#viewDueDate').text(formatDate(invoice.dueDate));
                $('#viewCustomerName').text(invoice.customer);
                $('#viewNotes').text(invoice.notes);
                
                // Set status
                let statusClass = '';
                let statusText = '';
                
                if (invoice.status === 'pending') {
                    statusClass = 'status-pending';
                    statusText = 'Pending';
                } else if (invoice.status === 'paid') {
                    statusClass = 'status-paid';
                    statusText = 'Paid';
                } else if (invoice.status === 'overdue') {
                    statusClass = 'status-overdue';
                    statusText = 'Overdue';
                }
                
                $('#viewInvoiceStatus').removeClass('status-pending status-paid status-overdue').addClass(statusClass).text(statusText);
                
                // Populate items table
                const itemsTbody = $('#viewItemsTable');
                itemsTbody.empty();
                
                invoice.items.forEach(item => {
                    const row = `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.description}</td>
                            <td>${item.quantity}</td>
                            <td>$${item.price.toFixed(2)}</td>
                            <td>${item.tax}%</td>
                            <td>$${item.total.toFixed(2)}</td>
                        </tr>
                    `;
                    itemsTbody.append(row);
                });
                
                // Set totals
                $('#viewSubtotal').text('$' + invoice.subtotal.toFixed(2));
                $('#viewTax').text('$' + invoice.tax.toFixed(2));
                $('#viewDiscount').text('$' + invoice.discount.toFixed(2));
                $('#viewTotal').text('$' + invoice.total.toFixed(2));
                $('#viewAmountDue').text('$' + invoice.total.toFixed(2));
                
                // Calculate paid amount and balance
                const paidAmount = invoice.payments.reduce((sum, payment) => sum + payment.amount, 0);
                const balanceDue = invoice.total - paidAmount;
                
                $('#viewAmountPaid').text('$' + paidAmount.toFixed(2));
                $('#viewBalanceDue').text('$' + balanceDue.toFixed(2));
                
                // Populate payment history
                const paymentTbody = $('#paymentHistoryTable');
                paymentTbody.empty();
                
                if (invoice.payments.length > 0) {
                    invoice.payments.forEach(payment => {
                        const row = `
                            <tr>
                                <td>${formatDate(payment.date)}</td>
                                <td>$${payment.amount.toFixed(2)}</td>
                                <td>${payment.method}</td>
                                <td>${payment.reference || 'N/A'}</td>
                            </tr>
                        `;
                        paymentTbody.append(row);
                    });
                } else {
                    paymentTbody.append('<tr><td colspan="4" class="text-center">No payments recorded</td></tr>');
                }
                
                // Show view modal
                $('#viewInvoiceModal').modal('show');
            }
        });

        // Record payment
        $('#savePaymentBtn').click(function() {
            // In a real application, you would save the payment to your database
            alert('Payment recorded successfully!');
            $('#recordPaymentModal').modal('hide');
            
            // Refresh the payments table
            populatePaymentsTable();
        });

        // Send payment reminders
        $('#sendRemindersBtn').click(function() {
            // In a real application, you would send email reminders to customers
            alert('Payment reminders sent successfully!');
        });

        // Search invoices
        $('#invoiceSearch').on('keyup', function() {
            const searchText = $(this).val().toLowerCase();
            $('#invoicesTable tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
            });
        });

        // Form submission for new invoice
        $('#invoiceForm').submit(function(e) {
            e.preventDefault();
            
            // In a real application, you would save the invoice to your database
            alert('Invoice saved successfully!');
            
            // Reset form
            this.reset();
            $('#itemsTable tbody').html(`
                <tr>
                    <td>
                        <select class="form-select item-select">
                            <option value="" selected disabled>Select Item</option>
                            <option value="1">Product A</option>
                            <option value="2">Product B</option>
                            <option value="3">Product C</option>
                            <option value="4">Service X</option>
                            <option value="5">Service Y</option>
                        </select>
                    </td>
                    <td><input type="text" class="form-control description" placeholder="Description"></td>
                    <td><input type="number" class="form-control quantity" value="1" min="1"></td>
                    <td><input type="number" class="form-control price" placeholder="0.00" step="0.01"></td>
                    <td>
                        <select class="form-select tax">
                            <option value="0">No Tax</option>
                            <option value="10" selected>GST 10%</option>
                            <option value="18">VAT 18%</option>
                        </select>
                    </td>
                    <td class="item-total">$0.00</td>
                    <td><button type="button" class="btn btn-sm btn-danger remove-item"><i class="fas fa-trash"></i></button></td>
                </tr>
            `);
            
            // Update totals
            calculateInvoiceTotals();
            
            // Generate new invoice number (simple increment for demo)
            const currentNum = parseInt($('#invoiceNumber').val().split('-')[2]);
            $('#invoiceNumber').val('INV-2023-' + (currentNum + 1).toString().padStart(3, '0'));
        });
    });
document.getElementById("savePaymentBtn").addEventListener("click", function () {
  const invoice = document.getElementById("paymentInvoiceSelect").value;
  const amount = document.getElementById("paymentAmount").value.trim();
  const date = document.getElementById("paymentDate").value;
  const method = document.getElementById("paymentMethod").value;

  if (!invoice || !amount || !date || !method) {
    alert("Please fill in all required fields: Invoice, Amount, Date, and Payment Method.");
    return;
  }

  // You can now submit the form or process the data
  alert("Payment recorded successfully!");
  // Optionally, close the modal:
  const modal = bootstrap.Modal.getInstance(document.getElementById('recordPaymentModal'));
  modal.hide();
});