window.onload = function(){
var xhr = new XMLHttpRequest();
var decisionlev = [];

xhr.open("POST", 'http://131.183.222.85:8080/policies', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        data = xhr.response;
        window.data = JSON.parse(data);
        console.log(data);
        for(var i = 0; i < data.length; i++)
        {
          decisionlev[i] = data[i].decisionLevel;
        }
        show();
      }
    } 
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));

function show() {
    console.log(data.length);
    for(var i = 0; i < data.length; i++)
    {
        var j = i+1;
        document.getElementById("policyName" + j).innerHTML = data[i].policyName;
        document.getElementById("declev"+ j).innerHTML = decisionlev[i];
        document.getElementById("netdeclev" + j).innerHTML = Math.round(data[i].weight * (decisionlev[i] - Math.log(data[i].impactWeight * data[i].constraints + 1))*10)/10;
    }
}

function sample_callback(sample_response){
  alert(sample_response);
}

function sample_load(sample_url, sample_data, sample_callback){
var sample_xhr = new XMLHttpRequest();
sample_xhr.onreadystatechange = function() {
if (sample_xhr.readyState === 4)
{
sample_callback(sample_xhr.response);
}
}
sample_xhr.open('POST', sample_url, true);
sample_xhr.setRequestHeader('Content-Type', 'application/json');
sample_xhr.send(JSON.stringify({
sample_data
}));
}

document.getElementById("submit1").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions1").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions1").value,
      processID:'1',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit2").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions2").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions2").value,
      processID:'2',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit3").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions3").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions3").value,
      processID:'3',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit4").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions4").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions4").value,
      processID:'4',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit5").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions5").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions5").value,
      processID:'5',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit6").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions6").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions6").value,
      processID:'6',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit7").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions7").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions7").value,
      processID:'7',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit8").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions8").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions8").value,
      processID:'8',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}

document.getElementById("submit9").onclick = function()
{
  decisionlev[0] = document.getElementById("decisions9").value;
        show();
  console.log('Method called');
  var sample_url = 'http://131.183.222.85:8080/pushPolicyDecisions';
  var sample_data = {
      processLevel:document.getElementById("decisions9").value,
      processID:'9',
      gameID:data[0].gameID,
      userID:data[0].userID,
      roundNumber:data[0].roundNumber};
  sample_load(sample_url, sample_data, sample_callback);
}
/*
$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  })
}
}
*/
}

