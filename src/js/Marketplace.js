var funds = 16471.91; //Set initial funds variable here.
                      //"inventory", defined below stores the items currently
                      //in the user's inventory, this should be populated by
                      //information in the database and added to when items are
                      //purchased from the marketplace
                      // "items", defined below, stores all items available in the store
var xhr = new XMLHttpRequest();

class shopItem {

  constructor(object) {
    this.properties = {
      name:object.name,
      processor:object.processor,
      mem: object.mem,
      storage:object.storage,
      price: object.price,
      type: object.type,
      img: object.img,
      risk: object.risk
  }
  }
  getDescription() {
    return ('<p>' + this.properties.processor + '<br> ' + this.properties.mem + '<br> ' + this.properties.storage + '</p>');
  }
}
class usersItems {
  constructor(){
    this.inventory = [];
    this.workforce=[];
  }
getUserRisk() {
    //total up risk levels for each item in users inventory
    var risk = 0;
    for(var i = 0; i < inventory.length; i++) {
      risk += inventory[i].risk;
    }
    return risk;
  }
 push(item) {this.inventory.push(item);}
 remove(index) {
    this.inventory.splice(index, 1);
  }
}
var inventory = new usersItems();
//Shop item objects, store in "items" to display in store front
var computer1 = new shopItem({name: 'Lenovo -330-15IKB 15.6" Laptop',
processor: 'Core i3', mem: '8GB Memory', storage: '1TB Hard Drive', price: 500.99, type: "Computer", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var computer2 = new shopItem({name: 'Lenovo -330-15IKB 15.6" Laptop',
processor: 'Core i3', mem: '8GB Memory', storage: '1TB Hard Drive', price: 500.99, type: "Computer", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var computer3 = new shopItem({name: 'Lenovo -330-15IKB 15.6" Laptop',
processor: 'Core i3', mem: '8GB Memory', storage: '1TB Hard Drive', price: 500.99, type: "Computer", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var server1 = new shopItem({name: 'Supermicro SuperChassis CSE-815 4-Bay LFF 1U Server',
 processor: '2x Intel Xeon Processors', mem: '256 GB DDR3', storage: '12TB Storage', price: 2047.00, type: "Server", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var server2 = new shopItem({name: 'HP Proliant DL360p Gen8 Server',
  processor: '2x Intel Xeon Processors',mem: '128 GB RAM', storage: '600GB Storage', price: 1852, type: "Server", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var server3 = new shopItem({name: 'Refurbished: HP ProLiant DL385 G6 Server',
    processor: '2x Opteron Processors',mem: '128 GB DDR2', storage: 'No HDD', price: 312.99, type: "Server", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var router1 = new shopItem({name: 'Cisco 1921-SEC/K9',
        processor: '',mem: '512 MB DDR2', storage: '256 MB Flash Memory', price: 1695, type: "Network", img: '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">'});
var items = [computer1, computer2, computer3, server1, server2, server3, router1];

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
// function for retrieving risk levels
function getRiskLevel(){
 xhr.open("GET",'http://localhost:3000/riskLevel',true);
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
     var risk_result=xhr.response;
     var json_result = JSON.parse(risk_result);
     for(var i = 0; i < json_result.length; i++) {
        inventory.push(new shopItem({
        type: json_result[i].assetType,
        risk: json_result[i].risk_level
      }))
    }
   }
 }
 xhr.send();
}
//instantiate instance of usersItems and fill inventory with "getRiskLevel"
var inventory = new usersItems();
getRiskLevel();

function callback(response){
  alert("Purchase Successful!");
}
function load(url,data, callback) {
 var xhr1 = new XMLHttpRequest();
 xhr1.onreadystatechange = function() {
   if (xhr1.readyState === 4) {
     callback(xhr1.response);
   }
 }
 xhr1.open('POST', url, true);
 xhr1.setRequestHeader('Content-Type', 'application/json');
 xhr1.send(JSON.stringify({
   value: data
}));
}
function addToInventory(button) {
 //This should only be called by buttons
 //Take the last digit of the button who called this, this is the index of
 //the item in "items" to add to "inventory."
 var index = button.id.slice(-1);
 var xhr1 = new XMLHttpRequest();
 inventory.push(items[index]);
 funds -= parseFloat(items[index].properties.price);
 document.getElementById("fundlabel").innerHTML=formatCurrency(funds);
 if (funds < 0) {
   document.getElementById("fundlabel").classList.remove("text-success");
   document.getElementById("fundlabel").style.color="red";
 } else {
   document.getElementById("fundlabel").classList.add("text-success");
 }
 document.getElementById("item" + index).style.display="none";
 var url = 'http://localhost:3000/purchase';
 load(url, items[index],callback);
}
function displayItemsOfType(type) {
  //Display items of a certain type (e.g server, computer...) in the store front
  document.getElementById("storeFront").innerHTML="";
  for (var i = 0; i < items.length; i++) {
    if(items[i].properties.type == type) {
      document.getElementById("storeFront").innerHTML += '<div class="row rounded border border-secondary p-2 mb-3" id="item' + i + '"> \
          <div class="col-md-4">  \
            ' + items[i].properties.img + ' \
          </div> \
          \
          <div class="col-md-5"> \
              <h5 class="mt-0 text-info">' + items[i].properties.name + '</h5> \
          ' + items[i].getDescription()+ ' \
          </div> \
             \
          <div class="col-md-3 "> \
            <b>PRICE</b> \
            <h4 class="text-secondary">' + formatCurrency(parseFloat(items[i].properties.price)) + '</h4> \
            <button type="button" onclick="javascript:addToInventory(this);" class="btn btn-warning btn-sm" id="button' + i + '"><i class="fas fa-cart-plus"></i> Buy</button> \
          </div> \
      </div>  ';
    }
  }
}
window.onload = function() {
  document.getElementById("fundlabel").innerHTML=formatCurrency(funds);
  if (funds < 0) {
    document.getElementById("fundlabel").classList.remove("text-success");
    document.getElementById("fundlabel").style.color="red";
  }
  //Create the divs in the marketplace from the "items" array
  displayItemsOfType("Computer");
}
window.onbeforeunload = function() {
  //Get risk level of current inventory and save it in database or cookie
  TechRisk = inventory.getUserRisk();
}
