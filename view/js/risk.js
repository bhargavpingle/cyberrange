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
                data: [2, 10, 5, 2],
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
                data: [10, 2, 5, 2],
            }]
        },

        // Configuration options go here
        options: {}
    });   
}

