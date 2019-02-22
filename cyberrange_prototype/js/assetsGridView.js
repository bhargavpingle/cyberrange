// JavaScript source code

var computers ={
    xp:{
        name: "Windows XP",
        op_sys: "Windows XP",
        qty: "100",
        unitCost: "600",
        maintenanceCost: "17040"
    },
    w7:{
        name: "Windows 7",
        op_sys: "Windows 7",
        qty: "100",
        unitCost: "800",
        maintenanceCost: "19360"
    },
    w10:{
        name: "Windows 10",
        op_sys: "Windows 10",
        qty: "100",
        unitCost: "1000",
        maintenanceCost: "21680"
    },
    ios9:{
        name: "iOS 9",
        op_sys: "iOS 9",
        qty: "50",
        unitCost: "800",
        maintenanceCost: "11360"
    },
    ios10:{
        name: "iOS 10",
        op_sys: "iOS 10",
        qty: "50",
        unitCost: "1000",
        maintenanceCost: "12100"
    },
    ios11:{
        name: "iOS 11",
        op_sys: "iOS 11",
        qty: "50",
        unitCost: "1500",
        maintenanceCost: "15900"
    }
};

var laptops ={
  w7:{
      name: "Windows 7",
      op_sys: "Windows 7",
      qty: "200",
      unitCost: "800",
      maintenanceCost: "38720"
  },
  w10:{
      name: "Windows 10",
      op_sys: "Windows 10",
      qty: "200",
      unitCost: "1400",
      maintenanceCost: "60704"
  },
  ios9:{
      name: "iOS 9",
      op_sys: "iOS 9",
      qty: "100",
      unitCost: "1200",
      maintenanceCost: "29040"
  },
  ios10:{
      name: "iOS 10",
      op_sys: "iOS 10",
      qty: "100",
      unitCost: "2000",
      maintenanceCost: "43360"
  }
};

var servers ={
  w2:{
      name: "Windows Server 2002",
      op_sys: "Windows Server 2002",
      qty: "5",
      unitCost: "5000",
      maintenanceCost: "7100"
  },
  w8:{
      name: "Windows 8",
      op_sys: "Windows 8",
      qty: "10",
      unitCost: "8000",
      maintenanceCost: "19360"
  },
  w12:{
      name: "Windows Server 2012",
      op_sys: "Windows Server 2012",
      qty: "15",
      unitCost: "10000",
      maintenanceCost: "33780"
  },
  unix5:{
      name: "Unix A",
      op_sys: "Unix A",
      qty: "5",
      unitCost: "5000",
      maintenanceCost: "6050"
  },
  unix10:{
      name: "Unix B",
      op_sys: "Unix B",
      qty: "5",
      unitCost: "10000",
      maintenanceCost: "14200"
  },
  linux10:{
      name: "Linux A",
      op_sys: "Linux A",
      qty: "10",
      unitCost: "3000",
      maintenanceCost: "8520"
  },
  linux5:{
      name: "Linux B",
      op_sys: "Linux B",
      qty: "15",
      unitCost: "10000",
      maintenanceCost: "36300"
  },
  other:{
      name: "Other",
      op_sys: "Various Other",
      qty: "5",
      unitCost: "10000",
      maintenanceCost: "12100"
  }
};

var networkDevices ={
  wired:{
      name: "Wired Network Segments",
      protocol: "",
      qty: "4",
      unitCost: "10000",
      maintenanceCost: "8480"
  },
  router1:{
      name: "Router Type 1",
      protocol: "N-1",
      qty: "40",
      unitCost: "1000",
      maintenanceCost: "9680"
  },
  router2:{
      name: "Router Type 2",
      protocol: "New",
      qty: "60",
      unitCost: "2000",
      maintenanceCost: "27024"
  },
  wap1:{
      name: "Wireless Access Point 1",
      protocol: "N-1",
      qty: "50",
      unitCost: "1000",
      maintenanceCost: "12100"
  },
  wap2:{
      name: "Wireless Access Point 2",
      protocol: "New",
      qty: "100",
      unitCost: "2000",
      maintenanceCost: "45040"
  }
};

var iot ={
  linux5:{
      name: "Camera Systems",
      op_sys: "N",
      qty: "50",
      unitCost: "3000",
      maintenanceCost: "31800"
  },
  linux6:{
      name: "Security Access Systems",
      op_sys: "N-1",
      qty: "10",
      unitCost: "4000",
      maintenanceCost: "9008"
  },
  linux7:{
      name: "HVAC Systems",
      op_sys: "N-2",
      qty: "5",
      unitCost: "10000",
      maintenanceCost: "12100"
  },
  linux8:{
      name: "Lab Equipment",
      op_sys: "N-3",
      qty: "100",
      unitCost: "5000",
      maintenanceCost: "142000"
  }
};

var software ={
  office2016:{
      name:"Office 2016",
      op_sys: "Windows 10, iOS 11",
      qty: "450",
      unitCost: "150",
      maintenanceCost: "14634"
  },
  office2013:{
    name:"Office 2016",
      op_sys: "Windows 7, iOS 10",
      qty: "500",
      unitCost: "100",
      maintenanceCost: "12100"
  },
  office2007:{
        name:"Office 2016",
      op_sys: "Windows XP, iOS 9",
      qty: "250",
      unitCost: "50",
      maintenanceCost: "3550"
  },
  EntErpNew:{
        name:"Office 2016",
      op_sys: "Windows Server 2012",
      qty: "450",
      unitCost: "2000",
      maintenanceCost: "202680"
  },
  EntErpLeg:{
        name:"Office 2016",
      op_sys: "Windows Server 2002",
      qty: "750",
      unitCost: "1500",
      maintenanceCost: "319500"
  },
  tpa:{
        name:"Office 2016",
      op_sys: "Windows Server 2012",
      qty: "950",
      unitCost: "1000",
      maintenanceCost: "221920"
  },
  tpaLeg:{
    name:"Office 2016"  ,
      op_sys: "Windows Server 2002",
      qty: "250",
      unitCost: "800",
      maintenanceCost: "60160"
  },
  cloud:{
    name:"Office 2016",
      op_sys: "",
      qty: "1200",
      unitCost: "500",
      maintenanceCost: "127200"
  },
  dbSql:{
    name:"Office 2016",
      op_sys: "Windows Server 2012",
      qty: "855",
      unitCost: "200",
      maintenanceCost: "38509"
  },
  dbSqlLeg:{
    name:"Office 2016",
      op_sys: "Windows Server 2002",
      qty: "150",
      unitCost: "100",
      maintenanceCost: "4260"
  },
  dbOracle:{
    name:"Office 2016",
      op_sys: "Windows Server 2012",
      qty: "450",
      unitCost: "600",
      maintenanceCost: "63072"
  },
  dbOracleLeg:{
    name:"Office 2016",
      op_sys: "Windows Server 2002",
      qty: "750",
      unitCost: "300",
      maintenanceCost: "65790"
  },
  dbLinux:{
    name:"Office 2016",
      op_sys: "",
      qty: "95",
      unitCost: "50",
      maintenanceCost: "1150"
  },
  dbLinuxLeg:{
    name:"Office 2016",
      op_sys: "",
      qty: "100",
      unitCost: "10",
      maintenanceCost: "301"
  }
};

var data=[computers,laptops,servers,networkDevices,iot,software];



function assets(obj){
    document.getElementById('grid').innerHTML='';
    var i=0;
    for(var property in data[obj]){
        i=i+1;
        document.getElementById('grid').innerHTML+= ' \
        <div class="col-md-12 card shadow p-3 mb-5 bg-white rounded grid"> \
        <div class="card-body"> \
        <div class= "row m-0"> \
        <div class="col-md-2 gridView"> \
        <h1 class="display-6 text-muted"> <span id="'+"name"+i+'"></span></h1> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"op_sys"+i+'"></span></h2> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"qty"+i+'"></span></h2> \
        </div> \
        <div class="col-md-3 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"unitCost"+i+'"></span></h2> \
        </div> \
        <div class="col-md-3 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"maint"+i+'"></span></h2> \
        </div> \
        </div> \
        </div> \
        </div> \
        '
        eval("document.getElementById('name"+i+"').innerHTML=data[obj]."+property+".name");
        eval("document.getElementById('op_sys"+i+"').innerHTML='OS: '+data[obj]."+property+".op_sys");
        eval("document.getElementById('qty"+i+"').innerHTML='quantity: '+data[obj]."+property+".qty");
        eval("document.getElementById('unitCost"+i+"').innerHTML='unit cost: '+data[obj]."+property+".unitCost+' $'");
        eval("document.getElementById('maint"+i+"').innerHTML='maint. cost: '+data[obj]."+property+".maintenanceCost+'$'");
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
      if(j%5===4||j%5===3)
        elementGrid[j].className="col-md-3 gridView";
      else
        elementGrid[j].className="col-md-2 gridView";
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