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

$(document).ready(function() {
$('.owl-carousel').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
$('.owl-carousel').find('.owl-stage-outer').children().unwrap();
$('.owl-carousel').removeClass("owl-center owl-loaded owl-text-select-on");

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
  items[i].Security_cost = (items[i].Unit_cost*items[i].Implementation_level)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].Implementation_level;
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
});

var items = [{"Implementation_level": 100, "Unit_cost": 350000, "Security_cost": 350000},{"Implementation_level": 100, "Unit_cost": 250000, "Security_cost": 250000},
{"Implementation_level": 100, "Unit_cost": 600000, "Security_cost": 600000},{"Implementation_level": 100, "Unit_cost": 70000, "Security_cost": 70000},
{"Implementation_level": 100, "Unit_cost": 250000, "Security_cost": 250000},{"Implementation_level": 100, "Unit_cost": 180000, "Security_cost": 180000},
{"Implementation_level": 100, "Unit_cost": 750000, "Security_cost": 750000},{"Implementation_level": 100, "Unit_cost": 120000, "Security_cost": 120000},
{"Implementation_level": 100, "Unit_cost": 120000, "Security_cost": 120000},{"Implementation_level": 100, "Unit_cost": 240000, "Security_cost": 240000},
{"Implementation_level": 100, "Unit_cost": 60000, "Security_cost": 60000},{"Implementation_level": 100, "Unit_cost": 36000, "Security_cost": 36000},
{"Implementation_level": 100, "Unit_cost": 177700, "Security_cost": 177700},{"Implementation_level": 100, "Unit_cost": 44425, "Security_cost": 44425},
{"Implementation_level": 100, "Unit_cost": 26655, "Security_cost": 26655},{"Implementation_level": 100, "Unit_cost": 53310, "Security_cost": 53310},
{"Implementation_level": 100, "Unit_cost": 17770, "Security_cost": 17770},{"Implementation_level": 100, "Unit_cost": 35540, "Security_cost": 35540},
{"Implementation_level": 100, "Unit_cost": 14400, "Security_cost": 14400},{"Implementation_level": 100, "Unit_cost": 35540, "Security_cost": 35540},
{"Implementation_level": 100, "Unit_cost": 17700, "Security_cost": 17700},{"Implementation_level": 100, "Unit_cost": 140000, "Security_cost": 140000},
{"Implementation_level": 100, "Unit_cost": 700000, "Security_cost": 700000}]

function increaseImplementationLevel(i) {
  if(items[i].Implementation_level < 100) { items[i].Implementation_level += 1; }
  items[i].Security_cost = (items[i].Unit_cost*items[i].Implementation_level)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML="";
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].Implementation_level;
  document.getElementById("securityCost"+i).innerHTML="";
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
function decreaseImplementationLevel(i) {
  if(items[i].Implementation_level > 0) { items[i].Implementation_level -= 1; }
  items[i].Security_cost = (items[i].Unit_cost*items[i].Implementation_level)/100.0;
  document.getElementById("implementationLevel"+i).innerHTML="";
  document.getElementById("implementationLevel"+i).innerHTML+=items[i].Implementation_level;
  document.getElementById("securityCost"+i).innerHTML="";
  document.getElementById("securityCost"+i).innerHTML+=formatCurrency(items[i].Security_cost);
}
function bringFocus(carouselItem) {
  var toDisplay = carouselItem;
 if (carouselItem == 22) {toDisplay = (carouselItem+19) % 22}
 else if (carouselItem < 3) {toDisplay = (0)}
 else {toDisplay = (carouselItem+20) % 22}
 $("#car").trigger("to.owl.carousel", [toDisplay,55, true]);}
