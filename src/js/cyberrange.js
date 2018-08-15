var ages = {
  //This dictionary should be populated with variables from the database
  //changing these variables affects the charts
  computers: {
    new: 2,
    aging: 20,
    old : 5
  },
  servers: {
    new: 4,
    aging: 5,
    old : 1
  },
  network: {
    new: 1,
    aging: 2,
    old : 5
  },
  printer: {
    new: 1,
    aging: 1,
    old : 0
  },
  special: {
    new: 0,
    aging: 3,
    old : 2
  },
}


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
              backgroundColor: ['#28A745','#17A2B8','#6C757D'],
            //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [ages.computers.new, ages.computers.aging, ages.computers.old],
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
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
            //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [ages.servers.new, ages.servers.aging, ages.servers.old],
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
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
            //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [ages.network.new, ages.network.aging, ages.network.old],
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
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
            //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [ages.printer.new, ages.printer.aging, ages.printer.old],
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
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
            //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
              data: [ages.special.new, ages.special.aging, ages.special.old],
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
