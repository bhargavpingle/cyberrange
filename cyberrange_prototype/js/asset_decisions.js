//Rewrite page
//Make nested objects into arrays of objects
//Try to eliminate eval statements and massive innerHTML writes
//Switch from Owl Carousel to Bootstrap carousel?

var xhr = new XMLHttpRequest();
var data;
var names = {
  W7: "Windows 7",
  XP: "Windows XP",
  W10: "Windows 10",
  iOS9: "iOS 9",
  iOS10: "iOS 10",
  iOS11: "iOS 11",
  W2: "Windows Server 2002",
  W8: "Windows 8",
  W12: "Windows Server 2012"
}
function truncateFloat(fltString) {
  //take a string representing a float and truncate it to 2 decimal places
  var tempFloat = parseFloat(fltString);
  tempFloat = tempFloat.toFixed(2);
  return String(tempFloat)
}
xhr.open("POST", 'http://131.183.222.85:8080/riskLevel', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    //console.log("ready state changed");
      var result = xhr.response;
      data = JSON.parse(result);
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].assetType == "Computers") {
          obj = {
            name: "",
            delta: parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            assetID: data[i].assetID,
            userID: data[i].userID,
            gameID: data[i].gameID,
            op_sys: names[data[i].os_protocol.replace("(", "").replace(")", "")],
            qty: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            unitCost: data[i].unitCost,
            maintenanceCost: truncateFloat(data[i].maintCost),
            support: data[i].support,
            assetValue: data[i].assetValue,
            roundNumber: data[i].roundNumber
          }
          var key = data[i].os_protocol.replace("(", "").replace(")", "")
          Computers[key]=obj;
        }
        else if (data[i].assetType == "Laptops") {
          obj = {
            name: "",
            delta: parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            assetID: data[i].assetID,
            userID: data[i].userID,
            gameID: data[i].gameID,
            op_sys: names[data[i].os_protocol.replace("(", "").replace(")", "")],
            qty: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            unitCost: data[i].unitCost,
            maintenanceCost: truncateFloat(data[i].maintCost),
            support: data[i].support,
            assetValue: data[i].assetValue,
            roundNumber: data[i].roundNumber
          }
          var key = data[i].os_protocol.replace("(", "").replace(")", "")
          Laptops[key]=obj;
        }
        else if (data[i].assetType == "Servers") {
          obj = {
            name: "",
            delta: parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            assetID: data[i].assetID,
            userID: data[i].userID,
            gameID: data[i].gameID,
            op_sys: names[data[i].os_protocol.replace("(", "").replace(")", "")],
            qty: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            unitCost: data[i].unitCost,
            maintenanceCost: truncateFloat(data[i].maintCost),
            support: data[i].support,
            assetValue: data[i].assetValue,
            roundNumber: data[i].roundNumber
          }
          var key = data[i].os_protocol.replace("(", "").replace(")", "")
          Servers[key]=obj;
        }
        else if (data[i].assetType == "Network Routers") {
          obj = {
            name: "",
            delta: parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            assetID: data[i].assetID,
            userID: data[i].userID,
            gameID: data[i].gameID,
            protocol: data[i].os_protocol,
            qty: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            unitCost: data[i].unitCost,
            maintenanceCost: truncateFloat(data[i].maintCost),
            support: data[i].support,
            assetValue: data[i].assetValue,
            roundNumber: data[i].roundNumber
          }
          var key = data[i].assetType.replace("(", "").replace(")", "").replace("-", "")
          networkDevices[key]=obj;
        }
        else if ((data[i].assetType == "Camera Systems") || (data[i].assetType == "Security Access Systems") || (
          data[i].assetType == "HVAC Systems")) {
          obj = {
            name: "",
            delta: parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            assetID: data[i].assetID,
            userID: data[i].userID,
            gameID: data[i].gameID,
            protocol: data[i].os_protocol,
            qty: parseInt(data[i].num)+parseInt(data[i].numNewPurchased)-parseInt(data[i].numRetired),
            unitCost: data[i].unitCost,
            maintenanceCost: truncateFloat(data[i].maintCost),
            support: data[i].support,
            assetValue: data[i].assetValue,
            roundNumber: data[i].roundNumber
          }
          var key = data[i].assetType.replace("(", "").replace(")", "").replace("-", "")
          iot[key]=obj;
        }
      }

  }
}
xhr.send(JSON.stringify({userID:1, gameID:1, roundNumber:round}));

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
var Computers ={}
var Laptops = {};
Computers.getName = function() {return "Computers"}
Laptops.getName = function() {return "Laptops"}
var Servers = {}
Servers.getName = function() {return "Servers"}
var networkDevices = {}
networkDevices.getName = function() {return "networkDevices"}
var iot = {};
iot.getName = function() {return "iot"}

var software ={
  getName() {return "software"},
  office2016:{
      op_sys: "Windows 10, iOS 11",
      qty: "450",
      unitCost: "150",
      maintenanceCost: "14634"
  },
  office2013:{
      op_sys: "Windows 7, iOS 10",
      qty: "500",
      unitCost: "100",
      maintenanceCost: "12100"
  },
  office2007:{
      op_sys: "Windows XP, iOS 9",
      qty: "250",
      unitCost: "50",
      maintenanceCost: "3550"
  },
  EntErpNew:{
      op_sys: "Windows Server 2012",
      qty: "450",
      unitCost: "2000",
      maintenanceCost: "202680"
  },
  EntErpLeg:{
      op_sys: "Windows Server 2002",
      qty: "750",
      unitCost: "1500",
      maintenanceCost: "319500"
  },
  tpa:{
      op_sys: "Windows Server 2012",
      qty: "950",
      unitCost: "1000",
      maintenanceCost: "221920"
  },
  tpaLeg:{
      op_sys: "Windows Server 2002",
      qty: "250",
      unitCost: "800",
      maintenanceCost: "60160"
  },
  cloud:{
      op_sys: "",
      qty: "1200",
      unitCost: "500",
      maintenanceCost: "127200"
  },
  dbSql:{
      op_sys: "Windows Server 2012",
      qty: "855",
      unitCost: "200",
      maintenanceCost: "38509"
  },
  dbSqlLeg:{
      op_sys: "Windows Server 2002",
      qty: "150",
      unitCost: "100",
      maintenanceCost: "4260"
  },
  dbOracle:{
      op_sys: "Windows Server 2012",
      qty: "450",
      unitCost: "600",
      maintenanceCost: "63072"
  },
  dbOracleLeg:{
      op_sys: "Windows Server 2002",
      qty: "750",
      unitCost: "300",
      maintenanceCost: "65790"
  },
  dbLinux:{
      op_sys: "",
      qty: "95",
      unitCost: "50",
      maintenanceCost: "1150"
  },
  dbLinuxLeg:{
      op_sys: "",
      qty: "100",
      unitCost: "10",
      maintenanceCost: "301"
  }
};

function updateInfoAdd(elemId, prop) {
  //Updates object and UI when an item is incremented
  var elemIdNum = elemId.id.slice(-1);
  var elemIdClass = elemId.id.slice(7, -1);
  //update quantity, assetValue, and maintenanceCost, and delta
  eval(elemIdClass+'.'+prop+"['qty']="+"parseInt("+elemIdClass+'.'+prop+"['qty'])+1");
  eval(elemIdClass+'.'+prop+"['delta']="+"parseInt("+elemIdClass+'.'+prop+"['delta'])+1");
  eval(elemIdClass+'.'+prop+"['assetValue']="+"parseInt("+elemIdClass+'.'+prop+"['qty'])*parseInt("+elemIdClass+'.'+prop+"['unitCost'])");
  eval(elemIdClass+'.'+prop+"['maintenanceCost']="+"(0.2+(120/parseFloat("+elemIdClass+'.'+prop+"['support']))/100)*parseInt("+elemIdClass+'.'+prop+"['assetValue'])");
  eval("document.getElementById('maint"+elemIdNum+"').innerHTML=truncateFloat("+elemIdClass+"."+prop+".maintenanceCost)");
  eval('document.getElementById("qty'+elemIdNum+'").innerHTML='+elemIdClass+'.'+prop+'["qty"]');
  return false;
}
function updateInfoRed(elemId, prop) {
  //Updates object and UI when an item is reduced
  //(0.2+(120/x)/100)*parseInt("+elemIdClass+'.'+prop+"['assetValue'])
  var elemIdNum = elemId.id.slice(-1);
  var elemIdClass = elemId.id.slice(7, -1);
  //decrement quantity and delta, update assetValue and maintenanceCost
  eval(elemIdClass+'.'+prop+"['qty']="+"parseInt("+elemIdClass+'.'+prop+"['qty'])-1");
  eval(elemIdClass+'.'+prop+"['delta']="+"parseInt("+elemIdClass+'.'+prop+"['delta'])-1");
  eval(elemIdClass+'.'+prop+"['assetValue']="+"parseInt("+elemIdClass+'.'+prop+"['qty'])*parseInt("+elemIdClass+'.'+prop+"['unitCost'])");
  eval(elemIdClass+'.'+prop+"['maintenanceCost']="+"(0.2+(120/parseFloat("+elemIdClass+'.'+prop+"['support']))/100)*parseInt("+elemIdClass+'.'+prop+"['assetValue'])");
  eval("document.getElementById('maint"+elemIdNum+"').innerHTML=truncateFloat("+elemIdClass+"."+prop+".maintenanceCost)");
  eval('document.getElementById("qty'+elemIdNum+'").innerHTML='+elemIdClass+'.'+prop+'["qty"]');
  return false;
}
var icons = {
  "Computers": '<i class="fas fa-desktop fa-10x" style="color: ',
  "Laptops": '<i class="fas fa-laptop fa-10x" style="color: ',
  "iot": '<i class="fas fa-mobile-alt fa-10x" style="color: ',
  "Servers": '<i class="fas fa-server fa-10x" style="color: ',
  "networkDevices": '<i class="fas fa-upload fa-10x" style="color: ',
  "software": '<i class="fas fa-database fa-10x" style="color: '
}

window.onbeforeunload= function() {
  var xhr1 = new XMLHttpRequest()
  arr = []
  for (var prop in Computers) {
    if (prop != "getName") {
      if(Computers[prop].delta >= 0) {
        Computers[prop].numNewPurchased = Computers[prop].delta;
        Computers[prop].numRetired = 0;
      }

    else {
      Computers[prop].numRetired = -1*Computers[prop].delta;
      Computers[prop].numNewPurchased = 0;
    }
    arr.push(Computers[prop]);
    }
  }
  for (var prop in Laptops) {
    if(prop != "getName") {
    if(Laptops[prop].delta >= 0) {
      Laptops[prop].numNewPurchased = Laptops[prop].delta;
      Laptops[prop].numRetired = 0;
    }
    else {
      Laptops[prop].numRetired = -1*Laptops[prop].delta;
      Laptops[prop].numNewPurchased = 0;
    }
    arr.push(Laptops[prop]);
  }
}
  for (var prop in Servers) {
    if (prop != "getName") {
    if(Servers[prop].delta >= 0) {
      Servers[prop].numNewPurchased = Servers[prop].delta;
      Servers[prop].numRetired = 0;
    }
    else {
      Servers[prop].numRetired = -1*Servers[prop].delta;
      Servers[prop].numNewPurchased = 0;
    }
    arr.push(Servers[prop]);
  }
}
  for (var prop in networkDevices) {
    if (prop != "getName") {
    if(networkDevices[prop].delta >= 0) {
      networkDevices[prop].numNewPurchased = networkDevices[prop].delta;
      networkDevices[prop].numRetired = 0;
    }
    else {
      networkDevices[prop].numRetired = -1*networkDevices[prop].delta;
      networkDevices[prop].numNewPurchased = 0;
    }
    arr.push(networkDevices[prop]);
  }
}

    function sampleCall(){
       console.log('Method called');
       sample_xhr = new XMLHttpRequest();

       var sample_url = 'http://131.183.222.85:8080/pushAssetDecisions';
       for (var obj in arr) {
         var sample_data = arr[obj];
         console.log(sample_data)
         sample_xhr.open('POST', sample_url, false);
         sample_xhr.setRequestHeader('Content-Type', 'application/json');
         console.log(sample_data);
         sample_xhr.send(JSON.stringify(sample_data));
       }
     }
    sampleCall();
 }
var colors = ["black", "teal", "green"]
function SecurityShow(obj){
  //console.log(obj);
    document.getElementById('car').innerHTML=""
    var i = 0;
    for (var property in obj) {
      //console.log(property);
      if (obj.hasOwnProperty(property) && !(property == "getName")) {
        //console.log("prop: "+property + " obj: "+obj);
        i=i+1;
        document.getElementById('car').innerHTML+=' \
        <div class="card shadow-sm text-center   "> \
            <div class="card-img-top text-secodary text-center shadow-sm p-3 mb-5 bg-white rounded"> '+ icons[obj.getName()] + ' '+ colors[i%3]+ ';" ></i> </div> \
                <div class="card-body"> \
                    <div class="Disptitle"> \
                    <h1 class="display-4 text-muted"> <span id="'+"name"+i+'"></span></h1> \
                    <h2 class="display-6 text-muted"> <span id="'+"op_sys"+i+'"></span></h2> \
                    </div> \
                    <p class="card-text"> \
                        <h1 class="display-2 mb-0"id="'+"qty"+i+'"></h1> \
                        Assets<br> \
                        <span class="text-primary lead">Unit Cost: $<span id="'+"unitCost"+i+'"></span></span><br> \
                        <span class="text-primary lead">Total Maintenance: $<span id="'+"maint"+i+'"></span></span> \
                    </p> \
                    <div class="row p-2 mx-0 asset-buttons"> \
                        <div class="/*col-md-4*/"><a id="addProp'+obj.getName()+i+'" href="javascript:;" onclick="javascript:updateInfoAdd(this, &#39'+property+'&#39);" data-toggle="tooltip"  title="Add" class="btn btn-success " ><i class="fas fa-plus"></i></a></div> \
                        <div class="/*col-md-4*/"><a id="redProp'+obj.getName()+i+'" href="javascript:;" onclick="javascript:updateInfoRed(this, &#39'+property+'&#39);" data-toggle="tooltip"  title="Reduce" class="btn btn-secondary "><i class="fas fa-minus"></i></a></div> \
                        <!--<div class="/*col-md-4*/"><a href="people_security.html" data-toggle="tooltip"  title="Train" class="btn btn-info "><i class="fas fa-award"></i></a></div>--> \
                    </div> \
                </div> \
        </div> \
        '
        if (obj == networkDevices) {
              eval("document.getElementById('op_sys"+i+"').innerHTML='Protocol: '+obj."+property+".protocol");
      } else {eval("document.getElementById('op_sys"+i+"').innerHTML='Operating System: '+obj."+property+".op_sys");}

      eval("document.getElementById('name"+i+"').innerHTML=obj."+property+".name");
      eval("document.getElementById('unitCost"+i+"').innerHTML=obj."+property+".unitCost");
      eval("document.getElementById('maint"+i+"').innerHTML=obj."+property+".maintenanceCost");
      eval("document.getElementById('qty"+i+"').innerHTML=obj."+property+".qty");
      $(document).ready(function() {
      $('.owl-carousel').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
      $('.owl-carousel').find('.owl-stage-outer').children().unwrap();
      $('.owl-carousel').removeClass("owl-center owl-loaded owl-text-select-on");

      $(".owl-carousel").owlCarousel({
        loop:false,
        rewind: false,
        margin:10,
        nav:true,
        dots: false

    });
    $(".owl-carousel").show()
  });}

}};
