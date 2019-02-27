
var peopleTitle1;
var peopleTitle2;
var peopleTitle3;

var employeeNumber1;
var employeeNumber2;
var employeeNumber3;

var costFte1;
var costFte2;
var costFte3;

var trainingPerEmployee1;
var trainingPerEmployee2;
var trainingPerEmployee3;
var security = {}
var netEngineer = {}
var ServerAdmin = {}
var DesktopEngineer ={
    level1:{
        title: "Desktop Engineer 1",
        employeeNumber: "03",
        costFte: "50,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Desktop Engineer 2",
        employeeNumber: "01",
        costFte: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Desktop Engineer 3",
        employeeNumber: "02",
        costFte: "80,000",
        trainingPerEmployee: "2,000"
    }
};

var DBA ={
    level1:{
        title: "DBA 1",
        employeeNumber: "02",
        costFte: "80,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "DBA 2",
        employeeNumber: "02",
        costFte: "90,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "DBA 3",
        employeeNumber: "01",
        costFte: "95,000",
        trainingPerEmployee: "2,000"
    }
};

var AppIntegration ={
    level1:{
        title: "App Integration 1",
        employeeNumber: "02",
        costFte: "80,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "App Integration 2",
        employeeNumber: "02",
        costFte: "90,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "App Integration 3",
        employeeNumber: "01",
        costFte: "95,000",
        trainingPerEmployee: "2,000"
    }
};

var AppDeveloper ={
    level1:{
        title: "App Developer 1",
        employeeNumber: "04",
        costFte: "60,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "App Developer 2",
        employeeNumber: "03",
        costFte: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "App Developer 3",
        employeeNumber: "01",
        costFte: "85,000",
        trainingPerEmployee: "2,000"
    }
};

var ServiceDesk ={
    level1:{
        title: "Service Desk 1",
        employeeNumber: "05",
        costFte: "40,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Service Desk 2",
        employeeNumber: "04",
        costFte: "50,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Service Desk 3",
        employeeNumber: "03",
        costFte: "60,000",
        trainingPerEmployee: "2,000"
    }
};

var DesktopSupport ={
    level1:{
        title: "Desktop Support 1",
        employeeNumber: "03",
        costFte: "40,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Desktop Support 2",
        employeeNumber: "03",
        costFte: "50,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Desktop Support 3",
        employeeNumber: "02",
        costFte: "60,000",
        trainingPerEmployee: "2,000"
    }
};
var peopleType = [security,netEngineer, ServerAdmin, DesktopEngineer, DBA, AppIntegration, AppDeveloper, ServiceDesk, DesktopSupport];
var xhr = new XMLHttpRequest();
var current, current_i;
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
addLoadEvent( function() {
    peopleTitle1 = document.getElementById("peopleTitle1");
    peopleTitle2 = document.getElementById("peopleTitle2");
    peopleTitle3 = document.getElementById("peopleTitle3");

    employeeNumber1 = document.getElementById("employeeNumber1");
    employeeNumber2 = document.getElementById("employeeNumber2");
    employeeNumber3 = document.getElementById("employeeNumber3");

    costFte1 = document.getElementById("costPerEmployee1");
    costFte2 = document.getElementById("costPerEmployee2");
    costFte3 = document.getElementById("costPerEmployee3");

    trainingPerEmployee1 = document.getElementById("trainingPerEmployee1");
    trainingPerEmployee2 = document.getElementById("trainingPerEmployee2");
    trainingPerEmployee3 = document.getElementById("trainingPerEmployee3");

});
addLoadEvent( function() {
  xhr.open("POST", 'http://131.183.222.85:8080/people', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var result = xhr.response;
      data = JSON.parse(result);
      console.log(data);
      for(var i = 0; i < data.length; i++) {
        if(data[i].peopleType.slice(0,-2) == "Security") {
          var num = data[i].peopleType.slice(-1);
          var level = "level"+num;
          security[level] = {
            title:"Security " + num,
            employeeNumber: data[i].fte,
            costFte: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte,
            addFte: data[i].addFte,
            removeFte: data[i].removeFte,
            peopleID: data[i].peopleID,
            gameID: data[i].gameID,
            roundNumber: data[i].roundNumber,
            userID: data[i].userID
          }
        }
        else if(data[i].peopleType.slice(0,-2) == "NetworkEngineer") {
          var num = data[i].peopleType.slice(-1);
          var level = "level"+num;
          netEngineer[level] = {
            title:"Network Engineer " + num,
            employeeNumber: data[i].fte,
            costFte: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte,
            addFte: data[i].addFte,
            removeFte: data[i].removeFte,
            peopleID: data[i].peopleID,
            gameID: data[i].gameID,
            roundNumber: data[i].roundNumber,
            userID: data[i].userID
          }
        }
        else if(data[i].peopleType.slice(0,-2) == "ServerAdmin") {
          var num = data[i].peopleType.slice(-1);
          var level = "level"+num;
          ServerAdmin[level] = {
            title:"Server Admin " + num,
            employeeNumber: data[i].fte,
            costFte: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte,
            addFte: data[i].addFte,
            removeFte: data[i].removeFte,
            peopleID: data[i].peopleID,
            gameID: data[i].gameID,
            roundNumber: data[i].roundNumber,
            userID: data[i].userID
          }
        }
      }
      SecurityShow(0);
    }
  }
  xhr.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

})

window.onbeforeunload= function() {
  var xhr1 = new XMLHttpRequest()
  var arr = []
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      arr.push(peopleType[i]["level"+j]);
    }
  }
    function sampleCall(){
       console.log('Method called');
       sample_xhr = new XMLHttpRequest();

       var sample_url = 'http://131.183.222.85:8080/pushPeopleDecisions';
       for (var i = 0; i < arr.length; i++) {
         var sample_data = arr[i];
         //console.log(sample_data);
         sample_xhr.open('POST', sample_url, false);
         sample_xhr.setRequestHeader('Content-Type', 'application/json');
         console.log(sample_data);
         sample_xhr.send(JSON.stringify(sample_data));
       }
     }
    sampleCall();
 }


function increase(lvl) {
  var toShow = current
  if(current["level"+(lvl)]["removeFte"] == 0){
    current["level"+(lvl)]["addFte"] = parseInt(current["level"+(lvl)]["addFte"])+1;
  }
  else {
    current["level"+(lvl)]["removeFte"] = parseInt(current["level"+(lvl)]["removeFte"])-1
  }
  SecurityShow(current_i);
}
function decrease(lvl) {
  if(parseInt(current["level"+(lvl)]["employeeNumber"]) == 0) { return false; }
  if(current["level"+(lvl)]["addFte"] == 0){
    current["level"+(lvl)]["removeFte"] = parseInt(current["level"+(lvl)]["removeFte"])+1;
  }
  else {
    current["level"+(lvl)]["addFte"] = parseInt(current["level"+(lvl)]["addFte"])-1;
  }
  SecurityShow(current_i);
}

function SecurityShow(i){
        current = peopleType[i];
        current_i = i;
        peopleTitle1.innerHTML= peopleType[i].level1.title;
        peopleTitle2.innerHTML= peopleType[i].level2.title;
        peopleTitle3.innerHTML= peopleType[i].level3.title;

        employeeNumber1.innerHTML= parseInt(peopleType[i].level1.employeeNumber)+parseInt(peopleType[i].level1.addFte)-parseInt(peopleType[i].level1.removeFte);
        employeeNumber2.innerHTML= parseInt(peopleType[i].level2.employeeNumber)+parseInt(peopleType[i].level2.addFte)-parseInt(peopleType[i].level2.removeFte);
        employeeNumber3.innerHTML= parseInt(peopleType[i].level3.employeeNumber)+parseInt(peopleType[i].level3.addFte)-parseInt(peopleType[i].level3.removeFte);

        costFte1.innerHTML= peopleType[i].level1.costFte;
        costFte2.innerHTML= peopleType[i].level2.costFte;
        costFte3.innerHTML= peopleType[i].level3.costFte;

        trainingPerEmployee1.innerHTML= peopleType[i].level1.trainingPerEmployee;
        trainingPerEmployee2.innerHTML= peopleType[i].level2.trainingPerEmployee;
        trainingPerEmployee3.innerHTML= peopleType[i].level3.trainingPerEmployee;
}
