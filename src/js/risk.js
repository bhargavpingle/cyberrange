var risk = {
  //This dictionary should be populated with variables from the database
  //changing these variables affects the charts
  "Technology": 2,
  "People": 10,
  "Policies": 5,
  "Process": 2,
  "legal": 10,
  "business model": 2,
  "board expectations": 5,
  "Political expectation": 2
}

window.onload =function(){
    var ctx = document.getElementById('currentRisk').getContext('2d');
    var ctx2 = document.getElementById('riskTolerance').getContext('2d');
    var currentRisk = document.getElementById('cRisk');
    var riskTolerance = document.getElementById('riskTl');

    currentRisk.innerHTML="10%";
    riskTolerance.innerHTML="20%";

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["Technology", "People", "Policies", "Process"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#007BFF'],
                // borderColor: 'rgb(255, 99, 132)',
                data: [risk["Technology"], risk["People"], risk["Policies"], risk["Process"]],
            }]
        },

        // Configuration options go here
        options: {}
    });

    var chart = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["legal", "business model", "board expectations", " Political expectation"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#28A745','#6C757D','#17A2B8','#007BFF'],
                // borderColor: 'rgb(255, 99, 132)',
                data: [risk["legal"], risk["business model"], risk["board expectations"], risk["Political expectation"]],
            }]
        },

        // Configuration options go here
        options: {}
    });
}
