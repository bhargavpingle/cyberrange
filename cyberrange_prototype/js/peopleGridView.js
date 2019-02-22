var security ={
    level1:{
        title: "Security 1",
        employeeNumber: 03,
        costPerEmployee:60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Security 2",
        employeeNumber: 03,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Security 3",
        employeeNumber: 01,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var netEngineer ={
    level1:{
        title: "Network Engineer 1",
        employeeNumber: 03,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Network Engineer 2",
        employeeNumber: 02,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Network Engineer 3",
        employeeNumber: 01,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var ServerAdmin ={
    level1:{
        title: "Server Admin 1",
        employeeNumber: 04,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Server Admin 2",
        employeeNumber: 03,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Server Admin 3",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var DesktopEngineer ={
    level1:{
        title: "Desktop Engineer 1",
        employeeNumber: 03,
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Desktop Engineer 2",
        employeeNumber: 01,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Desktop Engineer 3",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    }
};

var DBA ={
    level1:{
        title:"DBA 1",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "DBA 2",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "DBA 3",
        employeeNumber: 01,
        costPerEmployee: 95000,
        trainingPerEmployee: 2000
    }
};

var AppIntegration ={
    level1:{
        title: "App Integration 1",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "App Integration 2",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "App Integration 3",
        employeeNumber: 01,
        costPerEmployee: 95000,
        trainingPerEmployee: 2000
    }
};

var AppDeveloper ={
    level1:{
        title: "App Developer 1",
        employeeNumber: 04,
        costPerEmployee: 60000,
        trainingPerEmployee:2000
    },
    level2: {
        title: "App Developer 2",
        employeeNumber: 03,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "App Developer 3",
        employeeNumber: 01,
        costPerEmployee: 85000,
        trainingPerEmployee: 2000
    }
};

var ServiceDesk ={
    level1:{
        title: "Service Desk 1",
        employeeNumber: 05,
        costPerEmployee: 40000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Service Desk 2",
        employeeNumber: 04,
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Service Desk 3",
        employeeNumber: 03,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    }
};

var DesktopSupport ={
    level1:{
        title: "Desktop Support 1",
        employeeNumber: 03,
        costPerEmployee: 40000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Desktop Support 2",
        employeeNumber:03,
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Desktop Support 3",
        employeeNumber: 02,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    }
};



var data=[security,netEngineer,ServerAdmin,DesktopEngineer,DBA,AppIntegration,AppDeveloper,ServiceDesk,DesktopSupport];



function assets(obj){
    document.getElementById('grid').innerHTML='';
    var i=0;
    for(var property in data[obj]){
        i=i+1;
        document.getElementById('grid').innerHTML+= ' \
        <div class="col-md-12 card shadow p-3 mb-5 bg-white rounded grid"> \
        <div class="card-body"> \
        <div class= "row m-0"> \
        <div class="col-md-3 gridView"> \
        <h1 class="display-6 text-muted"> <span id="'+"title"+i+'"></span></h1> \
        </div> \
        <div class="col-md-3 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"employeeNumber"+i+'"></span></h2> \
        </div> \
        <div class="col-md-3 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"costPerEmployee"+i+'"></span></h2> \
        </div> \
        <div class="col-md-3 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"trainingPerEmployee"+i+'"></span></h2> \
        </div> \
        </div> \
        </div> \
        </div> \
        '
        eval("document.getElementById('title"+i+"').innerHTML=data[obj]."+property+".title");
        eval("document.getElementById('employeeNumber"+i+"').innerHTML='Employee Number: '+data[obj]."+property+".employeeNumber");
        eval("document.getElementById('costPerEmployee"+i+"').innerHTML='Employee Cost: '+data[obj]."+property+".costPerEmployee+' $'");
        eval("document.getElementById('trainingPerEmployee"+i+"').innerHTML='Training cost: '+data[obj]."+property+".trainingPerEmployee+' $'");
    }
}





// Get the elements with class="grid"
var elements = document.getElementsByClassName("grid");
var elementGrid=document.getElementsByClassName("gridView");


// List View
function listView() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].className="col-md-12 card shadow p-3 mb-5 bg-white rounded grid";
  }
  for(var j=0;j<elementGrid.length;j++){
        elementGrid[j].className="col-md-3 gridView";
  }
}

// Grid View
function gridView() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].className = "col-md-3 card shadow p-3 mb-5 bg-white rounded grid";
  }
  for(var j=0;j<elementGrid.length;j++)
        elementGrid[j].className="col-md-12 gridView";
}