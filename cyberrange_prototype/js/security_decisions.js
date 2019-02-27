//IMPORTANT NOTE currently the scroll bar is not responsive

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
var names = ["Firewall - Host", "Firewall - Network", "Firewall - Client",
"Anti-Virus - Host", "Anti-Virus - Network", "Anti-Virus - Client",
"Network Access Controls", "Spam-Phishing Filters", "Secure Email Gateway",
"Identity Management", "Multi-Factor Authentication", "Mobile Device Management",
"Security Event Information Manager", "Scanning Instruments", "Log Collection system",
"Threat Intelligence Feeds", "Forensics Tools", "Asset Management System ",
"Data Loss Prevention System", "Privacy Monitoring Technology", "Incident Management System",
"Data Backup and Recovery System", "HA/Backup Sites"];

var items = [{"implementationLevel": 100, "unitCost": 350000, "Security_cost": 350000},{"implementationLevel": 100, "unitCost": 250000, "Security_cost": 250000},
{"implementationLevel": 100, "unitCost": 600000, "Security_cost": 600000},{"implementationLevel": 100, "unitCost": 70000, "Security_cost": 70000},
{"implementationLevel": 100, "unitCost": 250000, "Security_cost": 250000},{"implementationLevel": 100, "unitCost": 180000, "Security_cost": 180000},
{"implementationLevel": 100, "unitCost": 750000, "Security_cost": 750000},{"implementationLevel": 100, "unitCost": 120000, "Security_cost": 120000},
{"implementationLevel": 100, "unitCost": 120000, "Security_cost": 120000},{"implementationLevel": 100, "unitCost": 240000, "Security_cost": 240000},
{"implementationLevel": 100, "unitCost": 60000, "Security_cost": 60000},{"implementationLevel": 100, "unitCost": 36000, "Security_cost": 36000},
{"implementationLevel": 100, "unitCost": 177700, "Security_cost": 177700},{"implementationLevel": 100, "unitCost": 44425, "Security_cost": 44425},
{"implementationLevel": 100, "unitCost": 26655, "Security_cost": 26655},{"implementationLevel": 100, "unitCost": 53310, "Security_cost": 53310},
{"implementationLevel": 100, "unitCost": 17770, "Security_cost": 17770},{"implementationLevel": 100, "unitCost": 35540, "Security_cost": 35540},
{"implementationLevel": 100, "unitCost": 14400, "Security_cost": 14400},{"implementationLevel": 100, "unitCost": 35540, "Security_cost": 35540},
{"implementationLevel": 100, "unitCost": 17700, "Security_cost": 17700},{"implementationLevel": 100, "unitCost": 140000, "Security_cost": 140000},
{"implementationLevel": 100, "unitCost": 700000, "Security_cost": 700000}];

var xhr = new XMLHttpRequest()



xhr.open("POST", 'http://131.183.222.85:8080/security', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var result = xhr.response;
    var data = JSON.parse(result);
    console.log(data);
    for(var i = 0; i < data.length; i++) {
      var data_index = names.indexOf(data[i].technologyName);
      items[data_index].unitCost = data[i].unitCost;
      items[data_index].implementationLevel = data[i].implementationLevel;
      items[data_index].userID = data[i].userID;
      items[data_index].gameID = data[i].gameID;
      items[data_index].roundNumber = data[i].roundNumber;
      items[data_index].technologyID = data[i].technologyID;
    }
  }
}
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));
window.onbeforeunload = function() {
  var xhr1 = new XMLHttpRequest()
  var arr = []
  for(var i = 0; i < items.length; i++) {
    arr.push(items[i]);
  }
    function sampleCall(){
       console.log('Method called');
       sample_xhr = new XMLHttpRequest();

       var sample_url = 'http://131.183.222.85:8080/pushSecurityDecisions';
       for (var i = 0; i < arr.length; i++) {
         var sample_data = arr[i];
         //console.log(sample_data);
         sample_xhr.open('POST', sample_url, false);
         sample_xhr.setRequestHeader('Content-Type', 'application/json');
         console.log(sample_data);
         sample_xhr.send(JSON.stringify(sample_data));
         // sample_load(sample_url, sample_data, sample_callback);
       }
       //var sample_data = {name:'Medha',content:'asset decision data'};
       //sample_load(sample_url, sample_data, sample_callback);
     }
    sampleCall();
}
$(document).ready(function() {
//$('.owl-carousel').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
//$('.owl-carousel').find('.owl-stage-outer').children().unwrap();
//$('.owl-carousel').removeClass("owl-center owl-loaded owl-text-select-on");

$(".owl-carousel").owlCarousel({
  items:4,
  loop:false,
  rewind: true,
  margin:10,
  nav:false,
  dots: true

});
$(".owl-carousel").show()

for(var i = 0; i < items.length; i++) {
  items[i].Security_cost = (items[i].unitCost*items[i].implementationLevel)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].implementationLevel;
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
});

function increaseImplementationLevel(i) {
  if(items[i].implementationLevel < 100) { items[i].implementationLevel += 1; }
  items[i].Security_cost = (items[i].unitCost*items[i].implementationLevel)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML="";
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].implementationLevel;
  document.getElementById("securityCost"+i).innerHTML="";
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
function decreaseImplementationLevel(i) {
  if(items[i].implementationLevel > 0) { items[i].implementationLevel -= 1; }
  items[i].Security_cost = (items[i].unitCost*items[i].implementationLevel)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML="";
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].implementationLevel;
  document.getElementById("securityCost"+i).innerHTML="";
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
function bringFocus(carouselItem) {
  var toDisplay = carouselItem;
  if (carouselItem == 22) {toDisplay = (carouselItem+19) % 22}
  else if (carouselItem < 3) {toDisplay = (0)}
  else {toDisplay = (carouselItem+20) % 22}
  $("#car").trigger("to.owl.carousel", [toDisplay,55, true]);
}
