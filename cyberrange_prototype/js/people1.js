var data;
var xhr = new XMLHttpRequest();
var chartData;

xhr.open("GET", 'http://131.183.222.85:8080/people', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        data = xhr.response;
        data = JSON.parse(data);


        function charts() {
          var computer=[];
          var laptop=[];
          var server=[];
          var network=[];
          var iot=[];
          var systemSoftware=[];
          for (var i = 0; i < data.length; i++){
            if (data[i].assetType == "Computers"){
              computer[i]={

                age: data[i].age,
                num: data[i].num,
              }
            //console.log(computer[i].age);
            }
            else if (data[i].assetType == "Laptops"){
              if(laptop.length==0)
              var j=0;
              laptop[j]={

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

                age: data[i].age,
                num: data[i].num,
              }
              j++;
            //console.log(systemSoftware[i].age);
            }
          }
    
          function securityChart(){
            var young=0;
            var aging=0;
            var old=0;
            for(var i=0;i<computer.length;i++){
              if(computer[i].age<=2)
              young=young+computer[i].num;
              else if(computer[i].age>2&&computer[i].age<=5)
              aging=aging+computer[i].num;
              else if(computer[i].age>5)
              old=old+computer[i].num;
            }

          var compctx = document.getElementById('securityChart').getContext('2d');
          var compchart = new Chart(compctx, {
            
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                  labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Computer",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                      data: [3,3,1],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        securityChart();


        function networkChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<laptop.length;i++){
            if(laptop[i].age<=2)
            young=young+laptop[i].num;
            else if(laptop[i].age>2&&laptop[i].age<=5)
            aging=aging+laptop[i].num;
            else if(laptop[i].age>5)
            old=old+laptop[i].num;
          }

        var compctx = document.getElementById('networkChart').getContext('2d');
        var compchart = new Chart(compctx, {
          
            // The type of chart we want to create
            type: 'pie',
      
            // The data for our dataset
            data: {
              labels: ["level-1", "level-2", "level-3"],
                datasets: [{
                    label: "Age of Computer",
                    backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                  //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [3,2,1],
                }]
            },
      
            // Configuration options go here
            options: {
              title: {
                display: true,
                text: 'Hierarchy'
              }
            }
        });
      }
      networkChart();


      function serverChart(){
        var young=0;
        var aging=0;
        var old=0;
        for(var i=0;i<server.length;i++){
          if(server[i].age<=2)
          young=young+server[i].num;
          else if(server[i].age>2&&server[i].age<=5)
          aging=aging+server[i].num;
          else if(server[i].age>5)
          old=old+server[i].num;
        }
          var servctx = document.getElementById('serverChart').getContext('2d');
          var servchart = new Chart(servctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Server",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                      data: [4,3,2],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        serverChart();

        
        function desktopChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<network.length;i++){
            if(network[i].age<=2)
            young=young+network[i].num;
            else if(network[i].age>2&&network[i].age<=5)
            aging=aging+network[i].num;
            else if(network[i].age>5)
            old=old+network[i].num;
          }
          var ctx = document.getElementById('desktopChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Network Device",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                      data: [5,3,1],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        desktopChart();

        function dbaChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<iot.length;i++){
            if(iot[i].age<=2)
            young=young+iot[i].num;
            else if(iot[i].age>2&&iot[i].age<=5)
            aging=aging+iot[i].num;
            else if(iot[i].age>5)
            old=old+iot[i].num;
          }
          var ctx = document.getElementById('dbaChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Iot Devices",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [2,2,1],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        dbaChart();


        function integrationChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<systemSoftware.length;i++){
            if(systemSoftware[i].age<=2)
            young=young+systemSoftware[i].num;
            else if(systemSoftware[i].age>2&&systemSoftware[i].age<=5)
            aging=aging+systemSoftware[i].num;
            else if(systemSoftware[i].age>5)
            old=old+systemSoftware[i].num;
          }
          var ctx = document.getElementById('integrationChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Device",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [2,2,2],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        integrationChart();


        function developerChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<systemSoftware.length;i++){
            if(systemSoftware[i].age<=2)
            young=young+systemSoftware[i].num;
            else if(systemSoftware[i].age>2&&systemSoftware[i].age<=5)
            aging=aging+systemSoftware[i].num;
            else if(systemSoftware[i].age>5)
            old=old+systemSoftware[i].num;
          }
          var ctx = document.getElementById('developerChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Device",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [4,3,2],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        developerChart();

        function serviceChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<systemSoftware.length;i++){
            if(systemSoftware[i].age<=2)
            young=young+systemSoftware[i].num;
            else if(systemSoftware[i].age>2&&systemSoftware[i].age<=5)
            aging=aging+systemSoftware[i].num;
            else if(systemSoftware[i].age>5)
            old=old+systemSoftware[i].num;
          }
          var ctx = document.getElementById('serviceChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Device",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [5,4,3],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        serviceChart();

        function supportChart(){
          var young=0;
          var aging=0;
          var old=0;
          for(var i=0;i<systemSoftware.length;i++){
            if(systemSoftware[i].age<=2)
            young=young+systemSoftware[i].num;
            else if(systemSoftware[i].age>2&&systemSoftware[i].age<=5)
            aging=aging+systemSoftware[i].num;
            else if(systemSoftware[i].age>5)
            old=old+systemSoftware[i].num;
          }
          var ctx = document.getElementById('supportChart').getContext('2d');
          var chart = new Chart(ctx, {
              // The type of chart we want to create
              type: 'pie',
        
              // The data for our dataset
              data: {
                labels: ["level-1", "level-2", "level-3"],
                  datasets: [{
                      label: "Age of Device",
                      backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
                    //   borderColor: ['rgb(255, 99, 132)', 'rgb(69, 136, 255)', 'rgb(92, 184, 92)'],
                    data: [3,3,2],
                  }]
              },
        
              // Configuration options go here
              options: {
                title: {
                  display: true,
                  text: 'Hierarchy'
                }
              }
          });
        }
        supportChart();
      }
        charts();
        
    } 

    
}
xhr.send();


// window.onload = function() {
//   var compctx = document.getElementById('computersChart').getContext('2d');
//   var compchart = new Chart(compctx, {
//       // The type of chart we want to create
//       type: 'pie',

//       // The data for our dataset
//       data: {
//           labels: ["level-1", "level-2", "level-3"],
//           datasets: [{
//               label: "Experience ",
//               backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
//               //borderColor: ['green', 'orange', 'red'],
//               data: [4, 3, 2],
//           }]
//       },

//       // Configuration options go here
//       options: {
//         title: {
//           display: true,
//           text: 'Seniority'
//         }
//       }
//   });
//   var servctx = document.getElementById('serversChart').getContext('2d');
//   var servchart = new Chart(servctx, {
//       // The type of chart we want to create
//       type: 'pie',

//       // The data for our dataset
//       data: {
//           labels: ["level-1", "level-2", "level-3"],
//           datasets: [{
//               label: "Experience ",
//               backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
//               //borderColor: ['green', 'orange', 'red'],
//               data: [3, 3, 1],
//           }]

//       },

//       // Configuration options go here
//       options: {
//         title: {
//           display: true,
//           text: 'Seniority'
//         }
//       }
//   });
//   var ctx = document.getElementById('networkChart').getContext('2d');
//   var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'pie',

//       // The data for our dataset
//       data: {
//         labels: ["level-1", "level-2", "level-3"],
//           datasets: [{
//               label: "Experience ",
//               backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
//               //borderColor: ['green', 'orange', 'red'],
//               data: [3, 2, 1],
//           }]
//       },

//       // Configuration options go here
//       options: {
//         title: {
//           display: true,
//           text: 'Seniority'
//         }
//       }
//   });
//   var ctx = document.getElementById('printersChart').getContext('2d');
//   var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'pie',

//       // The data for our dataset
//       data: {
//         labels: ["level-1", "level-2", "level-3"],
//           datasets: [{
//               label: "Experience ",
//               backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
//              //borderColor: ['green', 'orange', 'red'],
//               data: [5, 3, 1],
//           }]
//       },

//       // Configuration options go here
//       options: {
//         title: {
//           display: true,
//           text: 'Seniority'
//         }
//       }
//   });
//   var ctx = document.getElementById('specialChart').getContext('2d');
//   var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'pie',

//       // The data for our dataset
//       data: {
//         labels: ["level-1", "level-2", "level-3"],
//           datasets: [{
//               label: "Experience ",
//               backgroundColor: ['#17A2B8','#6C757D','#007BFF'],
//               //borderColor: ['green', 'orange', 'red'],
//               data: [1, 2, 3],
//           }]
//       },

//       // Configuration options go here
//       options: {
//         title: {
//           display: true,
//           text: 'Seniority'
//         }
//       }
//   });
// }



$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});


