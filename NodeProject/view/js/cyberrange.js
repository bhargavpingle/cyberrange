window.onload = function() {
  var compctx = document.getElementById('computersChart').getContext('2d');
  var compchart = new Chart(compctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Computer",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [2, 20, 5],
          }]
      },

      // Configuration options go here
      options: {}
  });
  var servctx = document.getElementById('serversChart').getContext('2d');
  var servchart = new Chart(servctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Server",
              backgroundColor: 'rgb(99, 255, 67)',
              borderColor: 'rgb(99, 255, 67)',
              data: [4, 5, 1],
          }]
      },

      // Configuration options go here
      options: {}
  });
  var ctx = document.getElementById('networkChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Network Device",
              backgroundColor: 'rgb(255, 0, 101)',
              borderColor: 'rgb(255, 0, 101)',
              data: [1, 2, 5],
          }]
      },

      // Configuration options go here
      options: {}
  });
  var ctx = document.getElementById('printersChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Printer",
              backgroundColor: 'rgb(0, 1, 132)',
              borderColor: 'rgb(0, 1, 132)',
              data: [1, 1, 0],
          }]
      },

      // Configuration options go here
      options: {}
  });
  var ctx = document.getElementById('specialChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'horizontalBar',

      // The data for our dataset
      data: {
          labels: ["0-2 Years", "2-5 Years", "5+ Years"],
          datasets: [{
              label: "Age of Device",
              backgroundColor: 'rgb(255, 200, 200)',
              borderColor: 'rgb(255, 200, 200)',
              data: [0, 3, 2],
          }]
      },

      // Configuration options go here
      options: {}
  });
}
