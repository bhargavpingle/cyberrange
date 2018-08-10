var funds = 16471.91; //Set initial funds variable here.
                      //"inventory", defined below stores the items currently
                      //in the user's inventory, this should be populated by
                      //information in the database and added to when items are
                      //purchased from the marketplace
                      // "items", defined below, stores all items available in the store

class shopItem {

  constructor(name, processor, mem, storage, price, type, img, risk) {
    this.name=name;
    this.processor=processor;
    this.mem = mem;
    this.storage=storage;
    this.price=price;
    this.type=type;
    this.img=img;
    this.risk=risk;
    /*if (this.type=="Computer") {
      this.img = '<i class="fas fa-shop fa-desktop"></i>'
    }
    else if (this.type=="Laptop") {
      this.img = '<i class="fas fa-shop fa-laptop"></i>'
    }*/
  }
  getDescription() {
    return ('<p>' + this.processor + '<br> ' + this.mem + '<br> ' + this.storage + '</p>');
  }
}
class usersItems {
  constructor(){
    this.inventory = [];
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
var computer1 = new shopItem('Lenovo -330-15IKB 15.6" Laptop',
'Core i3', '8GB Memory', '1TB Hard Drive', 500.99, "Computer", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var computer2 = new shopItem('Lenovo -330-15IKB 15.6" Laptop',
'Core i3', '8GB Memory', '1TB Hard Drive', 500.99, "Computer", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var computer3 = new shopItem('Lenovo -330-15IKB 15.6" Laptop',
'Core i3', '8GB Memory', '1TB Hard Drive', 500.99, "Computer", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var server1 = new shopItem('Supermicro SuperChassis CSE-815 4-Bay LFF 1U Server',
 '2x Intel Xeon Processors', '256 GB DDR3', '12TB Storage', 2047.00, "Server", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var server2 = new shopItem('HP Proliant DL360p Gen8 Server',
  '2x Intel Xeon Processors','128 GB RAM', '600GB Storage', 1852, "Server", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var server3 = new shopItem('Refurbished: HP ProLiant DL385 G6 Server',
    '2x Opteron Processors','128 GB DDR2', 'No HDD', 312.99, "Server", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var router1 = new shopItem('Cisco 1921-SEC/K9',
        '','512 MB DDR2', '256 MB Flash Memory', 1695, "Network", '<img class="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image">');
var items = [computer1, computer2, computer3, server1, server2, server3, router1];

function formatCurrency(funds) {
  //convert a decimal number to currency format, e.g, 13.4 --> $13.40
  var fund=String(funds.toFixed(2));
  var dols = fund.substring(0, fund.length-3);
  var formattedfunds="$";
  var p = 0;
  for (var i = 0; i < fund.length; i++) {
    if (((fund.length-i) % 3) == 0) {
      if (i != 0) {formattedfunds = formattedfunds + fund.substring(p, i) + ",";}
      p=i;
    }
  }formattedfunds = formattedfunds.slice(0, -1) + "." + String(funds.toFixed(2)).slice(-2);
  return formattedfunds;
}

function addToInventory(button) {
  //This should only be called by buttons
  //Take the last digit of the button who called this, this is the index of
  //the item in "items" to add to "inventory."
  var index = button.id.slice(-1);
  inventory.push(items[index]);
  funds -= parseFloat(items[index].price);
  document.getElementById("fundlabel").innerHTML=formatCurrency(funds);
  document.getElementById("item" + index).style.display="none";
  items.splice(index, 1);
  var xhr = new XMLHttpRequest();

xhr.open("POST", 'http://localhost:3000/purchase', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: items[index]
}));

xhr.onreadystatechange = function() {
  console.log(xhr);
  if (xhr.readyState == XMLHttpRequest.DONE) {
    alert('Purchase Successful!');

    // bootstrap alert - to be modified
//     document.getElementById('storeFront').innerHTML = ' <div style="padding: 5px;"> \
//      <div id="inner-message" class="alert alert-success"> \
//         \
//         Purchase Successful! \
//      \
// </div>'
    }
  //console.log(xhr);
  }
}

function displayItemsOfType(type) {
  //Display items of a certain type (e.g server, computer...) in the store front
  document.getElementById("storeFront").innerHTML="";
  for (var i = 0; i < items.length; i++) {
    if(items[i].type == type) {
      document.getElementById("storeFront").innerHTML += '<div class="row rounded border border-secondary p-2 mb-3" id="item' + i + '"> \
          <div class="col-md-4">  \
            ' + items[i].img + ' \
          </div> \
          \
          <div class="col-md-5"> \
              <h5 class="mt-0 text-info">' + items[i].name + '</h5> \
          ' + items[i].getDescription()+ ' \
          </div> \
             \
          <div class="col-md-3 "> \
            <b>PRICE</b> \
            <h4 class="text-secondary">' + formatCurrency(parseFloat(items[i].price)) + '</h4> \
            <button type="button" onclick="javascript:addToInventory(this);" class="btn btn-warning btn-sm" id="button' + i + '"><i class="fas fa-cart-plus"></i> Buy</button> \
          </div> \
      </div>  ';
    }
  }
}

window.onload = function() {
  document.getElementById("fundlabel").innerHTML=formatCurrency(funds);
  //Create the divs in the marketplace from the "items" array
  displayItemsOfType("Computer");

}
