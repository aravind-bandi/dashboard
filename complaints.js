function toggleNav() {
    document.getElementById("myNav").classList.toggle("active");
  }



  document.querySelectorAll('.overlay a').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.overlay a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  }); 

    // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Sentiment Chart
            const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
            const sentimentChart = new Chart(sentimentCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Positive', 'Neutral', 'Negative'],
                    datasets: [{
                        data: [65, 20, 15],
                        backgroundColor: [
                            '#4cc9f0',
                            '#f8961e',
                            '#f72585'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                padding: 20
                            }
                        }
                    }
                }
            });
            
            // Complaint Status Chart
            const complaintStatusCtx = document.getElementById('complaintStatusChart').getContext('2d');
            const complaintStatusChart = new Chart(complaintStatusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Resolved', 'In Progress', 'Pending', 'Escalated'],
                    datasets: [{
                        data: [42, 28, 20, 10],
                        backgroundColor: [
                            '#4cc9f0',
                            '#f8961e',
                            '#7209b7',
                            '#f72585'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                padding: 20
                            }
                        }
                    }
                }
            });
            
            // Priority Chart
            const priorityCtx = document.getElementById('priorityChart').getContext('2d');
            const priorityChart = new Chart(priorityCtx, {
                type: 'doughnut',
                data: {
                    labels: ['High', 'Medium', 'Low'],
                    datasets: [{
                        data: [35, 45, 20],
                        backgroundColor: [
                            '#f72585',
                            '#4361ee',
                            '#6c757d'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                padding: 20
                            }
                        }
                    }
                }
            });
            
            // Feedback Trend Chart
            const feedbackTrendCtx = document.getElementById('feedbackTrendChart').getContext('2d');
            const feedbackTrendChart = new Chart(feedbackTrendCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Positive',
                            data: [120, 135, 140, 150, 160, 165],
                            borderColor: '#4cc9f0',
                            backgroundColor: 'rgba(76, 201, 240, 0.1)',
                            tension: 0.3,
                            fill: true
                        },
                        {
                            label: 'Neutral',
                            data: [40, 45, 50, 45, 40, 35],
                            borderColor: '#f8961e',
                            backgroundColor: 'rgba(248, 150, 30, 0.1)',
                            tension: 0.3,
                            fill: true
                        },
                        {
                            label: 'Negative',
                            data: [30, 25, 20, 25, 30, 35],
                            borderColor: '#f72585',
                            backgroundColor: 'rgba(247, 37, 133, 0.1)',
                            tension: 0.3,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            // Resolution Time Chart
            const resolutionTimeCtx = document.getElementById('resolutionTimeChart').getContext('2d');
            const resolutionTimeChart = new Chart(resolutionTimeCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Avg. Resolution Time (days)',
                        data: [3.2, 2.8, 2.5, 2.3, 2.1, 1.9],
                        backgroundColor: '#4361ee',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            // Complaint Category Chart
            const complaintCategoryCtx = document.getElementById('complaintCategoryChart').getContext('2d');
            const complaintCategoryChart = new Chart(complaintCategoryCtx, {
                type: 'bar',
                data: {
                    labels: ['Product', 'Billing', 'Shipping', 'Service', 'Account'],
                    datasets: [{
                        data: [42, 28, 15, 10, 5],
                        backgroundColor: [
                            '#4895ef',
                            '#f72585',
                            '#6c757d',
                            '#4361ee',
                            '#f8961e'
                        ],
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            // Team Performance Chart
            const teamPerformanceCtx = document.getElementById('teamPerformanceChart').getContext('2d');
            const teamPerformanceChart = new Chart(teamPerformanceCtx, {
                type: 'polarArea',
                data: {
                    labels: ['CSAT', 'Resolution Rate', 'Avg. Time', 'Cases Handled'],
                    datasets: [{
                        data: [4.8, 92, 1.2, 42],
                        backgroundColor: [
                            'rgba(76, 201, 240, 0.7)',
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(248, 150, 30, 0.7)',
                            'rgba(114, 9, 183, 0.7)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            pointLabels: {
                                display: true,
                                centerPointLabels: true,
                                font: {
                                    size: 11
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        });