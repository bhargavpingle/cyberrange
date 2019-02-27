var round = parseInt(sessionStorage.getItem("round"))
var year = parseInt(sessionStorage.getItem("year"))+round-1;
//Should be initially false and set to true when all database reads and writes
//are completed
var xhr0 = new XMLHttpRequest();
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
var xhr4 = new XMLHttpRequest();
var xhr5 = new XMLHttpRequest();
var xhr6 = new XMLHttpRequest();
const NUMDB = 6;
var ready = 0;
var newAssets = [];
var newPeople = [];
var newSecurity = [];
var newPolicy = [];
var newProcesses = [];
var newScore = [];
var risk = {};

function getSupport(x) {
  if(100/(0.7*x.age)>100) { return 100; }
  else { return (100/(0.7*x.age)); }
}
function getScore(x) {
  if (x.scoreFactor == "Asset Risk") { return 0; }
  else if (x.scoreFactor == "Incident Severity Index") { return 0; }
  else if (x.scoreFactor == "Risk Tolerance") {
    return parseInt((0.25*(parseFloat(risk.legal)+parseFloat(risk.boardExpectations)+parseFloat(risk.marketTolerance)+parseFloat(risk.businessModel))));
  }
  else if (x.scoreFactor == "Governance Index") { return 50; }
}
xhr0.open("GET", 'http://131.183.222.85:8080/toleranceValues', false);
xhr0.setRequestHeader('Content-Type', 'application/json');
xhr0.send();
var res = xhr0.response;
var dat = JSON.parse(res);
risk.legal = dat[1].legalTolerance;
risk.businessModel = dat[1].businessTolerance;
risk.boardExpectations = dat[1].boardTolerance;
risk.marketTolerance = dat[1].marketTolerance;

xhr.open("POST", 'http://131.183.222.85:8080/riskLevel', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var result=xhr.response;
    var data = JSON.parse(result);
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      newAssets.push({
        age: parseInt(data[i].age)+1,
        assetID: data[i].assetID,
        assetType: data[i].assetType,
        assetValue: parseFloat(data[i].assetValue)*1.05,
        gameID: data[i].gameID,
        support: getSupport(data[i]),
        userID: data[i].userID,
        investment: parseInt(data[i].numNewPurchased)*parseFloat(data[i].unitCost),
        maintCost: parseFloat(data[i].maintCost)*1.05,
        num: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
        numNewPurchased: 0,
        numRetired: 0,
        os_protocol: data[i].os_protocol,
        roundNumber: parseInt(data[i].roundNumber)+1,
        unitCost: parseFloat(data[i].unitCost)*1.05
      })
    }
    ready = ready + 1;
    //console.log("a");
  }
}
xhr.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

xhr2.open("POST", 'http://131.183.222.85:8080/people', true);
xhr2.setRequestHeader('Content-Type', 'application/json');
xhr2.onreadystatechange = function () {
  if(xhr2.readyState === 4) {
    var result=xhr2.response;
    var data = JSON.parse(result);
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      newPeople.push({
        costFte: parseFloat(data[i].costFte)*1.05,
        fte: parseInt(data[i].fte)+parseInt(data[i].addFte)-parseInt(data[i].removeFte),
        laborCost: parseFloat(data[i].costFte)*parseInt(data[i].fte),
        addFte: 0,
        removeFte: 0,
        gameID: data[i].gameID,
        level: data[i].level,
        peopleType: data[i].peopleType,
        roundNumber: parseInt(data[i].roundNumber)+1,
        userID: data[i].userID
      })
    }
    ready = ready + 1;
    //console.log("b");
  }
}
xhr2.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

xhr3.open("POST", 'http://131.183.222.85:8080/security', true);
xhr3.setRequestHeader('Content-Type', 'application/json');
xhr3.onreadystatechange = function () {
  if(xhr3.readyState === 4) {
    var result=xhr3.response;
    var data = JSON.parse(result);
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      newSecurity.push({
        technologyName: data[i].technologyName,
        securityCost: ((parseFloat(data[i].unitCost)*parseInt(data[i].implementationLevel))/100.0),
        gameID: data[i].gameID,
        roundNumber: parseInt(data[i].roundNumber)+1,
        userID: data[i].userID,
        implementationLevel: data[i].implementationLevel,
        unitCost: parseFloat(data[i].unitCost)*1.05,
        assess: data[i].assess[0],
        detect: data[i].detect[0],
        protect: data[i].protect[0],
        respond: data[i].respond[0]
      })
    }
    ready = ready + 1;
    //console.log("b");
  }
}
xhr3.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

xhr4.open("POST", 'http://131.183.222.85:8080/policies', true);
xhr4.setRequestHeader('Content-Type', 'application/json');
xhr4.onreadystatechange = function () {
  if(xhr4.readyState === 4) {
    var result=xhr4.response;
    var data = JSON.parse(result);
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      newPolicy.push({
        policyID: data[i].policyID,
        gameID: data[i].gameID,
        impactWeight: data[i].impactWeight,
        userID: data[i].userID,
        weight: data[i].weight,
        roundNumber: parseInt(data[i].roundNumber)+1,
        policyName: data[i].policyName,
        netDecisionLevel: parseFloat(data[i].impactWeight)*(parseInt(data[i].decisionLevel)-Math.log(parseFloat(data[i].impactWeight*(parseInt(data[i].constraints)+1)))),
        constraints: data[i].constraints
      })
    }
    ready = ready + 1;
    //console.log("b");
  }
}
xhr4.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

xhr5.open("POST", 'http://131.183.222.85:8080/processes', true);
xhr5.setRequestHeader('Content-Type', 'application/json');
xhr5.onreadystatechange = function () {
  if(xhr5.readyState === 4) {
    var result=xhr5.response;
    var data = JSON.parse(result);
    console.log(data)
    for(var i = 0; i < data.length; i++) {
      newProcesses.push({
        roundNumber: parseInt(data[i].roundNumber)+1,
        gameID: data[i].gameID,
        userID: data[i].userID,
        processCostFactor: parseFloat(data[i].weight)*Math.log(parseInt(data[i].decisionLevel)+1),
        weight: data[i].weight,
        decisionLevel: data[i].decisionLevel,
        processID: data[i].processID,
        processName: data[i].processName
      })
    }
    ready = ready + 1;
    //console.log("b");
  }
}
xhr5.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

xhr6.open("POST", 'http://131.183.222.85:8080/score', true);
xhr6.setRequestHeader('Content-Type', 'application/json');
xhr6.onreadystatechange = function () {
  if (xhr6.readyState === 4) {
    var result = xhr6.response;
    var data = JSON.parse(result);
    console.log(data);
    for(var i = 0; i < data.length; i++){
      newScore.push({
        userID: data[i].userID,
        gameID: data[i].gameID,
        roundNumber: parseInt(data[i].roundNumber)+1,
        scoreFactor: data[i].scoreFactor,
        scoreID: data[i].scoreID,
        score: getScore(data[i])
      })
      console.log(data[i])
      console.log(newScore[i])
    }
    ready += 1;
  }
}
xhr6.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}))
function addLoadEvent(func)
{
    var oldonload = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}

function advanceYear() {
  //Check whether the database read/writes are finished every 3.5 seconds

    let a = window.setInterval(function() {
      if(ready >= NUMDB) {
        clearInterval(a);
        console.log(newAssets);
        console.log(newPeople);
        console.log(newSecurity);
          var xhrS = new XMLHttpRequest();
          var sample_url = 'http://131.183.222.85:8080/simulateAssets';
          console.log("simulating assets...");
          for (var i = 0; i < newAssets.length; i++) {
            var sample_data = newAssets[i];
            xhrS.open('POST', sample_url, false);
            xhrS.setRequestHeader('Content-Type', 'application/json');
            console.log(sample_data);
            xhrS.send(JSON.stringify(sample_data));
          }

        var xhrS2 = new XMLHttpRequest();
        var sample_url = 'http://131.183.222.85:8080/simulatePeople';
        for (var i = 0; i < newPeople.length; i++) {
          var sample_data = newPeople[i];
          //console.log(sample_data);
          xhrS2.open('POST', sample_url, false);
          xhrS2.setRequestHeader('Content-Type', 'application/json');
          console.log(sample_data);
          xhrS2.send(JSON.stringify(sample_data));
        }
        var xhrS3 = new XMLHttpRequest();
        var sample_url = 'http://131.183.222.85:8080/simulateSecurity';
        for (var i = 0; i < newSecurity.length; i++) {
          var sample_data = newSecurity[i];
          //console.log(sample_data);
          xhrS3.open('POST', sample_url, false);
          xhrS3.setRequestHeader('Content-Type', 'application/json');
          console.log(sample_data);
          xhrS3.send(JSON.stringify(sample_data));
        }
        var xhrS4 = new XMLHttpRequest();
        var sample_url = 'http://131.183.222.85:8080/simulateProcess';
        for (var i = 0; i < newProcesses.length; i++) {
          var sample_data = newProcesses[i];
          //console.log(sample_data);
          xhrS4.open('POST', sample_url, false);
          xhrS4.setRequestHeader('Content-Type', 'application/json');
          console.log(sample_data);
          xhrS4.send(JSON.stringify(sample_data));
        }
        var xhrS5 = new XMLHttpRequest();
        var sample_url = 'http://131.183.222.85:8080/simulatePolicy';
        for (var i = 0; i < newPolicy.length; i++) {
          var sample_data = newPolicy[i];
          //console.log(sample_data);
          xhrS5.open('POST', sample_url, false);
          xhrS5.setRequestHeader('Content-Type', 'application/json');
          console.log(sample_data);
          xhrS5.send(JSON.stringify(sample_data));
        }
        var xhrS6 = new XMLHttpRequest();
        var sample_url = 'http://131.183.222.85:8080/simulateScore';
        for (var i = 0; i < newScore.length; i++) {
          var sample_data = newScore[i];
          //console.log(sample_data);
          xhrS6.open('POST', sample_url, false);
          xhrS6.setRequestHeader('Content-Type', 'application/json');
          console.log(sample_data);
          xhrS6.send(JSON.stringify(sample_data));
        }
        round = round + 1;
        sessionStorage.setItem("round", round);
        window.location.href="risk.html";
        return false;
        }
    }, 3500)
}
addLoadEvent(advanceYear);
