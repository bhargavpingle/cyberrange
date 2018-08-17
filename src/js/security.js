function formatCurrency(funds) {
  //convert a decimal number to currency format, e.g, 13.4 --> $13.40
  var fund=String(funds.toFixed(2));
  var dols = fund.substring(0, fund.length-3);
  var formattedfunds="$";
  var p = 0;
  var neg;
  if (fund.includes("-")) {
    neg = true;
    fund = fund.substring(1, fund.length);
  }
  for (var i = 0; i < fund.length; i++) {
    if (((fund.length-i) % 3) == 0) {
      if (i != 0) {formattedfunds = formattedfunds + fund.substring(p, i) + ",";}
      p=i;
    }
  }formattedfunds = formattedfunds.slice(0, -1) + "." + String(funds.toFixed(2)).slice(-2);
  if (neg) {formattedfunds = formattedfunds.substring(0,1) + "-" + formattedfunds.substring(1,formattedfunds.length)}
  return formattedfunds;
}

var cost = {
  //This dictionary should be populated with variables from the database
  //changing these variables affects the charts
  computers: parseFloat(sessionStorage.getItem("riskComputer")),
  servers: parseFloat(sessionStorage.getItem("riskServer")),
  network: parseFloat(sessionStorage.getItem("riskNetwork")),
  //These do not match categories of items in the database
  printers: 20,
  iot: 40,

  total:parseFloat(sessionStorage.getItem("riskAll"))
  }

var fund = formatCurrency(parseFloat(sessionStorage.getItem("funds")));

window.onload =function(){
    var ctx = document.getElementById('currentRisk').getContext('2d');
    // var ctx2 = document.getElementById('riskTolerance').getContext('2d');
    var currentRisk = document.getElementById('cRisk');
    var riskTolerance = document.getElementById('riskTl');

    var compCost = document.getElementById('computer');
    var servCost = document.getElementById('server');
    var netCost = document.getElementById('network');
    var printCost = document.getElementById('printer');
    var iotCost = document.getElementById('iot');

    riskTolerance.innerHTML=fund;
    currentRisk.innerHTML=formatCurrency(cost.total);

    compCost.innerHTML=formatCurrency(cost.computers);
    servCost.innerHTML=formatCurrency(cost.servers);
    netCost.innerHTML=formatCurrency(cost.network);
    printCost.innerHTML=formatCurrency(cost.printers);
    iotCost.innerHTML=formatCurrency(cost.iot);


    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: ["Computers", "Servers", "Network Devices", "Printers","IOT"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#007BFF','#343A40'],
                // borderColor: 'rgb(255, 99, 132)',
                data: [cost.computers, cost.servers, cost.network, cost.printers, cost.iot],
            }]
        },

        // Configuration options go here
        options: {
            legend:{
                display:true,
                labels:{
                    fontSize: 15
                }
            }

        }
    });

    // var chart = new Chart(ctx2, {
    //     // The type of chart we want to create
    //     type: 'doughnut',

    //     // The data for our dataset
    //     data: {
    //         labels: ["legal", "business model", "board expectations", " Political expectation"],
    //         datasets: [{
    //             label: "My First dataset",
    //             backgroundColor: ['#28A745','#6C757D','#17A2B8','#007BFF'],
    //             // borderColor: 'rgb(255, 99, 132)',
    //             data: [cost["legal"], c["business model"], risk["board expectations"], risk["Political expectation"]],
    //         }]
    //     },

    //     // Configuration options go here
    //     options: {}
    // });
}
