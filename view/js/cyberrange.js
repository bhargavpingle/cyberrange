window.onload = function() {
  var compctx = document.getElementById('computersChart').getContext('2d');
  var compchart = new Chart(compctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Computer",
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [2, 20, 5],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Age of Computer'
        }
      }
  });
  var servctx = document.getElementById('serversChart').getContext('2d');
  var servchart = new Chart(servctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Server",
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [4, 5, 1],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Age of Server'
        }
      }
  });
  var ctx = document.getElementById('networkChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Network Device",
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [1, 2, 5],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Age of Network Device'
        }
      }
  });
  var ctx = document.getElementById('printersChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Printer",
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [1, 1, 0],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Age of Printer'
        }
      }
  });
  var ctx = document.getElementById('specialChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Device",
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [0, 3, 2],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Age of Device'
        }
      }
  });
}
