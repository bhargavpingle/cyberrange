var data;
var xhr = new XMLHttpRequest();
var chartData;

xhr.open("GET", 'http://131.183.222.85:8080/people', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        data = xhr.response;
        data = JSON.parse(data);

    } 
}
xhr.send();



window.onload = function() {
  var compctx = document.getElementById('computersChart').getContext('2d');
  var compchart = new Chart(compctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["level-1", "level-2", "level-3"],
          datasets: [{
              label: "Experience ",
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
              //borderColor: ['green', 'orange', 'red'],
              data: [4, 3, 2],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Seniority'
        }
      }
  });
  var servctx = document.getElementById('serversChart').getContext('2d');
  var servchart = new Chart(servctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
          labels: ["level-1", "level-2", "level-3"],
          datasets: [{
              label: "Experience ",
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
              //borderColor: ['green', 'orange', 'red'],
              data: [3, 3, 1],
          }]

      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Seniority'
        }
      }
  });
  var ctx = document.getElementById('networkChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
        labels: ["level-1", "level-2", "level-3"],
          datasets: [{
              label: "Experience ",
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
              //borderColor: ['green', 'orange', 'red'],
              data: [3, 2, 1],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Seniority'
        }
      }
  });
  var ctx = document.getElementById('printersChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
        labels: ["level-1", "level-2", "level-3"],
          datasets: [{
              label: "Experience ",
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
             //borderColor: ['green', 'orange', 'red'],
              data: [5, 3, 1],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Seniority'
        }
      }
  });
  var ctx = document.getElementById('specialChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
        labels: ["level-1", "level-2", "level-3"],
          datasets: [{
              label: "Experience ",
              backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
              //borderColor: ['green', 'orange', 'red'],
              data: [1, 2, 3],
          }]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Seniority'
        }
      }
  });
}




$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });

