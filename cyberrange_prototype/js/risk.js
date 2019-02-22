var year = new Date().getFullYear()
if (sessionStorage.getItem("year") != null && sessionStorage.getItem("year") != 0) {year = parseInt(sessionStorage.getItem("year"));}
var round = 1;
if (sessionStorage.getItem("round") != null && sessionStorage.getItem("round") != 0) {round = parseInt(sessionStorage.getItem("round"));}
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
var ready = 0;

var asset=0;
var maintenance = 0;
var laborCost = 0;
var SaaS_cost = 0;
var riskTolerance_val;
var govIndex_val;
var costF=0;

var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
var xhr4 = new XMLHttpRequest();
var xhr5 = new XMLHttpRequest();

//Get the parameters
xhr.open("GET", 'http://131.183.222.85:8080/score', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var result = xhr.response;
    var data = JSON.parse(result);
    console.log(data);
    for(var i = 0; i < data.length; i++){
      if (data[i].scoreID == 5) {
        riskTolerance_val = data[i].round_i;
      }
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr.send()

//Get asset investment cost
xhr2.open("GET", 'http://131.183.222.85:8080/riskLevel', true);
xhr2.setRequestHeader('Content-Type', 'application/json');
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    var result1 = xhr2.response;
    var data1 = JSON.parse(result1);
    console.log(data1);
    for (var i = 0; i < data1.length; i++){
      asset += parseFloat(data1[i].investment);
      maintenance += parseFloat(data1[i].maintCost);
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr2.send()

//Get people investment cost
xhr3.open("GET", 'http://131.183.222.85:8080/people', true);
xhr3.setRequestHeader('Content-Type', 'application/json');
xhr3.onreadystatechange = function () {
  if (xhr3.readyState === 4) {
    var result2 = xhr3.response;
    var data2 = JSON.parse(result2);
    console.log(data2);
    for (var i = 0; i < data2.length; i++){
      laborCost += parseFloat(data2[i].laborCost)
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr3.send()

//Get process cost factors
xhr4.open("GET", 'http://131.183.222.85:8080/processes', true);
xhr4.setRequestHeader('Content-Type', 'application/json');
xhr4.onreadystatechange = function () {
  if (xhr4.readyState === 4) {
    var result3 = xhr4.response;
    var data3 = JSON.parse(result3);
    console.log(data3);
    for(var i = 0; i < data3.length; i++) {
      costF += parseFloat(data3[i].processCostFactor);
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr4.send()

//Get tolerance values information
xhr5.open("GET", 'http://131.183.222.85:8080/toleranceValues', true);
xhr5.setRequestHeader('Content-Type', 'application/json');
xhr5.onreadystatechange = function () {
  if (xhr5.readyState === 4) {
    var result4 = xhr5.response;
    var data4 = JSON.parse(result4);
    console.log(data4);
    risk.legal = data4[1].legalTolerance/4.0;
    risk.businessModel = data4[1].businessTolerance/4.0;
    risk.boardExpectations = data4[1].boardTolerance/4.0;
    risk.politicalExpectation = data4[1].marketTolerance/4.0;
    for(var i = 0; i < data4[0].length; i++){
      if (data4[0][i].governanceID == 1) {
        risk.businessGovernance = data4[0][i].governanceLevel;
        //console.log(data4[0][i].governanceLevel)
      }
      else if (data4[0][i].governanceID == 3) {
        risk.boardCommunication = data4[0][i].governanceLevel;
        //console.log(data4[0][i].governanceLevel)
      }
      else if (data4[0][i].governanceID == 5) {
        govIndex_val = data4[0][i].governanceLevel;
      }
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr5.send()

var xhr6 = new XMLHttpRequest()
xhr6.open("GET", 'http://131.183.222.85:8080/security', true);
xhr6.setRequestHeader('Content-Type', 'application/json');
xhr6.onreadystatechange = function () {
  if (xhr6.readyState === 4) {
    var result = xhr6.response;
    var data = JSON.parse(result);
    console.log(data);
    for(var i = 0; i < data.length; i++) {
      SaaS_cost += data[i].securityCost;
    }
    ready += 1;
    if (ready == 6) { fillNums(); }
  }
}
xhr6.send();
var risk = {
  //This dictionary should be populated with variables from the database
  //changing these variables affects the charts
//   "Technology": 2,
//   "People": 10,
//   "Policies": 5,
//   "Process": 2,
  "legal": 10,
  "businessModel": 2,
  "boardExpectations": 5,
  "politicalExpectation": 2,
  "businessGovernance":6,
  "boardCommunication":4,
}

var governanceIndex = 0.4*risk.businessGovernance*0.6*risk.boardCommunication;

var process = {
    //"costFactors":100 //from db. all the cost factors needed to be summed up together here.
}

var expense={
    //"saaS":15000, //Will eventually be from database, fixed for now
    "costPremiums":0 //keep it as it is. it is calculated on the next line.
}


function fillNums(){
    // var ctx = document.getElementById('currentRisk').getContext('2d');
    process.costFactors = costF;
    expense.maintenance= maintenance;
    expense.saaS = SaaS_cost;
    expense.labor = laborCost;
    expense.costPremiums=(0.03*expense.labor*process.costFactors)+1500*govIndex_val;

    var ctx2 = document.getElementById('riskTolerance').getContext('2d');
    var ctx3 = document.getElementById('govIndex').getContext('2d');
    var ctx4 = document.getElementById('expense').getContext('2d');
    // var currentRisk = document.getElementById('cRisk');
    var riskTolerance = document.getElementById('riskTl');
    var govIndex = document.getElementById('gIndex');
    var totalExpense = document.getElementById('tExpense');
    var capitalExpense = document.getElementById('capExpense');
    var cashCost = document.getElementById('cashCost');
    var cashBudget = document.getElementById('cashBudget');
    var budgetVar = document.getElementById('budgetVar');
    var performIndex = document.getElementById('performIndex');

    //var riskTolerance_val = 1/4*risk.legal+1/4*risk.businessModel+1/4*risk.boardExpectations+1/4*risk.politicalExpectation;
    // currentRisk.innerHTML="10%";
    riskTolerance.innerHTML=riskTolerance_val;


    // var governanceIndex = 0.4*risk.businessGovernance*0.6*risk.boardCommunication;
    govIndex.innerHTML = govIndex_val.toFixed(2);

    var totalExpense1 = expense.labor+ expense.maintenance+expense.saaS+expense.costPremiums;
    totalExpense.innerHTML = formatCurrency(totalExpense1);

    var capitalExpense1 = asset;//asset.computer+asset.laptop+asset.server+asset.network+asset.ioT+asset.application;
    capitalExpense.innerHTML = formatCurrency(capitalExpense1);

    var cashCost1=totalExpense1+capitalExpense1;
    cashCost.innerHTML = formatCurrency(cashCost1);

    var cashBudget1=4000000;// fixed, from db
    cashBudget.innerHTML = formatCurrency(cashBudget1);

    var budgetVar1= cashBudget1-cashCost1;
    budgetVar.innerHTML = formatCurrency(budgetVar1);

    if (budgetVar1>0){
        performIndex.innerHTML=100*budgetVar1.toFixed(2);
    } else {
        performIndex.innerHTML=0;
    }


    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'doughnut',

    //     // The data for our dataset
    //     data: {
    //         labels: ["Technology", "People", "Policies", "Process"],
    //         datasets: [{
    //             label: "My First dataset",
    //             backgroundColor: ['#28A745','#17A2B8','#6C757D','#007BFF'],
    //             // borderColor: 'rgb(255, 99, 132)',
    //             data: [risk["Technology"], risk["People"], risk["Policies"], risk["Process"]],
    //         }]
    //     },

    //     // Configuration options go here
    //     options: {

    //     }
    // });

    var chart = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["legal", "business", "board", " Political"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#28A745','#6C757D','#17A2B8','#007BFF'],
                // borderColor: 'rgb(255, 99, 132)',
                data: [risk.legal, risk.businessModel, risk.boardExpectations, risk.politicalExpectation],
            }]
        },

        // Configuration options go here
        options: {
            legend:{
                display:false
            },
        }
    });

    var chart = new Chart(ctx3, {
        type: 'horizontalBar',

        data:{
            labels:['Business Governance','Board Communication'],
            datasets:[{
                backgroundColor:['#28A745','#6C757D'],
                data:[risk.businessGovernance,risk.boardCommunication]
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true,
                    barThickness:20
                }]
            },
            legend:{
                display:false
            },
        }
    });

    var chart = new Chart(ctx4,{
        type: 'bar',
        data:{
            labels:['LaborExp', 'MaintExp', 'SaaS','CostPrem'],
            datasets:[{
                backgroundColor: ['#28A745','#6C757D','#17A2B8','#007BFF'],
                data:[expense.labor,expense.maintenance,expense.saaS,expense.costPremiums],

            }]
        },
        options:{
            scales: {
                xAxes: [{
                    stacked: true,
                    barThickness: 50
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            legend:{
                display:false
            },
        }
    });


}
function reset() {
  window.onbeforeunload = null;
  sessionStorage.clear();
  location.reload(true);
}
window.onbeforeunload = function() {
  sessionStorage.setItem("year", year);
  sessionStorage.setItem("round", round);
}
