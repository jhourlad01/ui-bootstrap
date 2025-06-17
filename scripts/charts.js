  const ctx1 = document.getElementById('chart1').getContext('2d');
  const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'BTC Price',
        data: [30000, 31000, 32000, 31500, 32500, 33000, 33500],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: false } }
    }
  });

  const ctx2 = document.getElementById('chart2').getContext('2d');
  const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['BTC', 'ETH', 'SOL', 'ADA', 'XRP'],
      datasets: [{
        label: 'Market Cap (Billion USD)',
        data: [600, 300, 40, 50, 20],
        backgroundColor: [
          '#f7931a',
          '#627eea',
          '#00ffa3',
          '#0033ad',
          '#346aa9'
        ]
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  const ctx3 = document.getElementById('chart3').getContext('2d');
  const chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['BTC', 'ETH', 'Others'],
      datasets: [{
        data: [50, 30, 20],
        backgroundColor: ['#f7931a', '#627eea', '#bbb']
      }]
    },
    options: { responsive: true }
  });

  const ctx4 = document.getElementById('chart4').getContext('2d');
  const chart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ['Long', 'Short'],
      datasets: [{
        data: [70, 30],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    },
    options: { responsive: true }
  });
