var data;
var xhr = new XMLHttpRequest();
var asset;

xhr.open("POST", 'http://131.183.222.85:8080/riskLevel', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        data = xhr.response;
        data = JSON.parse(data);
        //console.log(data);




          var computer=[];
          var laptop=[];
          var server=[];
          var network=[];
          var iot=[];
          var systemSoftware=[];
          for (var i = 0; i < data.length; i++){
            if (data[i].assetType == "Computers"){
              if(computer.length==0)
              var j=0;
              computer[j]={
                title: data[i].assetType+" ("+data[i].os_protocol+")",
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++;
            // console.log(computer[i]);
            }
            else if (data[i].assetType == "Laptops"){
              if(laptop.length==0)
              var j=0;
              laptop[j]={
                title: data[i].assetType+" ("+data[i].os_protocol+")",
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++;
            //console.log(laptop[i].age);
            }
            else if (data[i].assetType == "Servers"){
              if(server.length==0)
              var j=0;
              server[j]={
                title: data[i].assetType+" ("+data[i].os_protocol+")",
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++;
            //console.log(server[i].age);
            }
            else if (data[i].assetType == "Network Routers"){
              if(network.length==0)
              var j=0;
              network[j]={
                title: data[i].assetType+" ("+data[i].os_protocol+")",
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++
            //console.log(network[i].age);
            }
            else if (data[i].assetType == "Camera Systems"||data[i].assetType =="Security Access Systems"||data[i].assetType =="HVAC Systems"){
              if(iot.length==0)
              var j=0;
              iot[j]={

                title: data[i].assetType,
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++;
            //console.log(iot[i].age);
            }
            else if (data[i].assetType == "System Software"){
              if(systemSoftware.length==0)
              var j=0;
              systemSoftware[j]={

                title: data[i].assetType,
                unitCost:data[i].unitCost.toLocaleString(),
                os: data[i].os_protocol,
                maintCost:(~~data[i].maintCost).toLocaleString(),
                assetValue:data[i].assetValue.toLocaleString(),
                age: data[i].age,
                num: data[i].num,
              }
              j++;
            //console.log(systemSoftware[i].age);
            }
          }

          iot[0]={title:"Camera Systems",os:"N",age:1,num:50,unitCost:3000,maintCost:31800,assetValue:150000};
          iot[1]={title:"Security Access System",os:"N-1",age:3,num:10,unitCost:4000,maintCost:9008,assetValue:40000};
          iot[2]={title:"HVAC System",age:5,os:"N-2",num:100,unitCost:10000,maintCost:12100,assetValue:50000};

          systemSoftware[0]={title:"MS Office 2016",os:"W10,iOS11",age:2,num:450,unitCost:150,maintCost:14634,assetValue:67500};
          systemSoftware[1]={title:"MS Office 2013",os:"W7,iOS10",age:5,num:500,unitCost:100,maintCost:12100,assetValue:50000};
          systemSoftware[2]={title:"MS Office 2007",os:"XP iOS9",age:10,num:250,unitCost:50,maintCost:3550,assetValue:12500};


        asset=[computer,laptop,server,network,iot,systemSoftware];
    } 
  }
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));



function assets(obj){
    document.getElementById('grid').innerHTML='';
    var i=0;
    for(var x in asset[obj]){
        i=i+1;
        console.log(asset[obj]);
        document.getElementById('grid').innerHTML+= ' \
        <div class="col-md-12 card shadow p-3 mb-5 bg-white rounded grid"> \
        <div class="card-body"> \
        <div class= "row m-0" id="cards"> \
        <div class="col-md-2 gridView"> \
        <h1 class="display-6 text-muted"> <span id="'+"name"+i+'"></span></h1> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"op_sys"+i+'"></span></h2> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"qty"+i+'"></span></h2> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"unitCost"+i+'"></span></h2> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"assetValue"+i+'"></span></h2> \
        </div> \
        <div class="col-md-2 gridView"> \
        <h2 class="display-6 text-muted"> <span id="'+"maint"+i+'"></span></h2> \
        </div> \
        </div> \
        </div> \
        </div> \
        '

        eval("document.getElementById('name"+i+"').innerHTML=asset[obj]["+x+"].title");
        eval("document.getElementById('op_sys"+i+"').innerHTML='OS/Protocol: '+asset[obj]["+x+"].os");
        // if(asset[obj].title=="")
        eval("document.getElementById('qty"+i+"').innerHTML='quantity: '+asset[obj]["+x+"].num");
        eval("document.getElementById('unitCost"+i+"').innerHTML='unit cost: '+asset[obj]["+x+"].unitCost+' $'");
        eval("document.getElementById('assetValue"+i+"').innerHTML='Asset Value: '+asset[obj]["+x+"].assetValue+' $'");
        eval("document.getElementById('maint"+i+"').innerHTML='maint. cost: '+asset[obj]["+x+"].maintCost+' $'");
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