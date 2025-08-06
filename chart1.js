const ctx = document.getElementById('barchart1');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 25, 8, 3, 17, 6, 8, 2, 5, 9],
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
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
