var security = {}
/*var security ={
    level1:{
        title: "Security 1",
        employeeNumber: "03",
        costPerEmployee: "60,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Security 2",
        employeeNumber: "03",
        costPerEmployee: "80,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Security 3",
        employeeNumber: "01",
        costPerEmployee: "90,000",
        trainingPerEmployee: "2,000"
    }
};*/
var netEngineer = {}
/*
var netEngineer ={
    level1:{
        title: "Network Engineer 1",
        employeeNumber: "03",
        costPerEmployee: "60,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Network Engineer 2",
        employeeNumber: "02",
        costPerEmployee: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Network Engineer 3",
        employeeNumber: "01",
        costPerEmployee: "90,000",
        trainingPerEmployee: "2,000"
    }
};*/

var ServerAdmin = {}
/*var ServerAdmin ={
    level1:{
        title: "Server Admin 1",
        employeeNumber: "04",
        costPerEmployee: "60,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Server Admin 2",
        employeeNumber: "03",
        costPerEmployee: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Server Admin 3",
        employeeNumber: "02",
        costPerEmployee: "90,000",
        trainingPerEmployee: "2,000"
    }
};*/

var DesktopEngineer ={
    level1:{
        title: "Desktop Engineer 1",
        employeeNumber: "03",
        costPerEmployee: "50,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Desktop Engineer 2",
        employeeNumber: "01",
        costPerEmployee: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Desktop Engineer 3",
        employeeNumber: "02",
        costPerEmployee: "80,000",
        trainingPerEmployee: "2,000"
    }
};

var DBA ={
    level1:{
        title: "DBA 1",
        employeeNumber: "02",
        costPerEmployee: "80,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "DBA 2",
        employeeNumber: "02",
        costPerEmployee: "90,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "DBA 3",
        employeeNumber: "01",
        costPerEmployee: "95,000",
        trainingPerEmployee: "2,000"
    }
};

var AppIntegration ={
    level1:{
        title: "App Integration 1",
        employeeNumber: "02",
        costPerEmployee: "80,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "App Integration 2",
        employeeNumber: "02",
        costPerEmployee: "90,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "App Integration 3",
        employeeNumber: "01",
        costPerEmployee: "95,000",
        trainingPerEmployee: "2,000"
    }
};

var AppDeveloper ={
    level1:{
        title: "App Developer 1",
        employeeNumber: "04",
        costPerEmployee: "60,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "App Developer 2",
        employeeNumber: "03",
        costPerEmployee: "70,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "App Developer 3",
        employeeNumber: "01",
        costPerEmployee: "85,000",
        trainingPerEmployee: "2,000"
    }
};

var ServiceDesk ={
    level1:{
        title: "Service Desk 1",
        employeeNumber: "05",
        costPerEmployee: "40,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Service Desk 2",
        employeeNumber: "04",
        costPerEmployee: "50,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Service Desk 3",
        employeeNumber: "03",
        costPerEmployee: "60,000",
        trainingPerEmployee: "2,000"
    }
};

var DesktopSupport ={
    level1:{
        title: "Desktop Support 1",
        employeeNumber: "03",
        costPerEmployee: "40,000",
        trainingPerEmployee: "2,000"
    },
    level2: {
        title: "Desktop Support 2",
        employeeNumber: "03",
        costPerEmployee: "50,000",
        trainingPerEmployee: "2,000"
    },
    level3: {
        title: "Desktop Support 3",
        employeeNumber: "02",
        costPerEmployee: "60,000",
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
    var peopleTitle1 = document.getElementById(peopleTitle1);
    var peopleTitle2 = document.getElementById(peopleTitle2);
    var peopleTitle3 = document.getElementById(peopleTitle3);

    var employeeNumber1 = document.getElementById(employeeNumber1);
    var employeeNumber2 = document.getElementById(employeeNumber2);
    var employeeNumber3 = document.getElementById(employeeNumber3);

    var costPerEmployee1 = document.getElementById(costPerEmployee1);
    var costPerEmployee2 = document.getElementById(costPerEmployee2);
    var costPerEmployee3 = document.getElementById(costPerEmployee3);

    var trainingPerEmployee1 = document.getElementById(trainingPerEmployee1);
    var trainingPerEmployee2 = document.getElementById(trainingPerEmployee2);
    var trainingPerEmployee3 = document.getElementById(trainingPerEmployee3);

});
addLoadEvent( function() {
  xhr.open("GET", 'http://131.183.222.85:8080/people', true);
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
            costPerEmployee: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte
          }
        }
        else if(data[i].peopleType.slice(0,-2) == "NetworkEngineer") {
          var num = data[i].peopleType.slice(-1);
          var level = "level"+num;
          netEngineer[level] = {
            title:"Network Engineer " + num,
            employeeNumber: data[i].fte,
            costPerEmployee: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte
          }
        }
        else if(data[i].peopleType.slice(0,-2) == "ServerAdmin") {
          var num = data[i].peopleType.slice(-1);
          var level = "level"+num;
          ServerAdmin[level] = {
            title:"Network Engineer " + num,
            employeeNumber: data[i].fte,
            costPerEmployee: data[i].costFte,
            trainingPerEmployee: data[i].trainingFte
          }
        }
      }
      SecurityShow(0);
    }
  }
  xhr.send();

})




function increase(lvl) {
  var toShow = current
  current["level"+(lvl)]["employeeNumber"] = parseInt(current["level"+(lvl)]["employeeNumber"])+1;
  SecurityShow(current_i);
}
function decrease(lvl) {
  if(parseInt(current["level"+(lvl)]["employeeNumber"]) == 0) { return false; } 
  current["level"+(lvl)]["employeeNumber"] = parseInt(current["level"+(lvl)]["employeeNumber"])-1;
  SecurityShow(current_i);
}

function SecurityShow(i){
        current = peopleType[i];
        current_i = i;
        peopleTitle1.innerHTML= peopleType[i].level1.title;
        peopleTitle2.innerHTML= peopleType[i].level2.title;
        peopleTitle3.innerHTML= peopleType[i].level3.title;

        employeeNumber1.innerHTML= peopleType[i].level1.employeeNumber;
        employeeNumber2.innerHTML= peopleType[i].level2.employeeNumber;
        employeeNumber3.innerHTML= peopleType[i].level3.employeeNumber;

        costPerEmployee1.innerHTML= peopleType[i].level1.costPerEmployee;
        costPerEmployee2.innerHTML= peopleType[i].level2.costPerEmployee;
        costPerEmployee3.innerHTML= peopleType[i].level3.costPerEmployee;

        trainingPerEmployee1.innerHTML= peopleType[i].level1.trainingPerEmployee;
        trainingPerEmployee2.innerHTML= peopleType[i].level2.trainingPerEmployee;
        trainingPerEmployee3.innerHTML= peopleType[i].level3.trainingPerEmployee;
}
