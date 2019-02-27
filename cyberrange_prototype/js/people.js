var data;
var xhr = new XMLHttpRequest();
var chartData;

xhr.open("POST", 'http://131.183.222.85:8080/people', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        data = xhr.response;
        data = JSON.parse(data);


        function charts() {
          var security=[];
          var network=[];
          var server=[];
          var desktop=[];
          var dba=[];
          var integration=[];
          var developer=[];
          var service=[];
          var support=[];

          for (var i = 0; i < data.length; i++){
            if (data[i].peopleType == "Security-1"||data[i].peopleType=="Security-2"||data[i].peopleType=="Security-3"){
              if(security.length==0)
              var j=0;
              security[j]={
                title: data[i].peopleType,
                fte: data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "NetworkEngineer-1"||data[i].peopleType=="NetworkEngineer-2"||data[i].peopleType=="NetworkEngineer-3"){
              if(network.length==0)
              var j=0;
              network[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "ServerAdmin-1"||data[i].peopleType=="ServerAdmin-2"||data[i].peopleType=="ServerAdmin-3"){
              if(server.length==0)
              var j=0;
              server[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "Desktop Engineer-1"||data[i].peopleType=="Desktop Engineer-2"||data[i].peopleType=="Desktop Engineer-3"){
              if(desktop.length==0)
              var j=0;
              desktop[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "DBA-1"||data[i].peopleType=="DBA-2"||data[i].peopleType=="DBA-3"){
              if(dba.length==0)
              var j=0;
              dba[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "App Integration-1"||data[i].peopleType=="App Integration-2"||data[i].peopleType=="App Integration-3"){
              if(integration.length==0)
              var j=0;
              integration[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "App Developer-1"||data[i].peopleType=="App Developer-2"||data[i].peopleType=="App Developer-3"){
              if(developer.length==0)
              var j=0;
              developer[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "Service Desk-1"||data[i].peopleType=="Service Desk-2"||data[i].peopleType=="Service Desk-3"){
              if(service.length==0)
              var j=0;
              service[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
            else if (data[i].peopleType == "Desktop Support-1"||data[i].peopleType=="Desktop Support-2"||data[i].peopleType=="Desktop Support-3"){
              if(support.length==0)
              var j=0;
              support[j]={
                title: data[i].peopleType,
                fte:data[i].fte,
              }
              j++;
            }
          }
          

          //This code will be removed when database is updated with all the rows (right now database has only 9 rows)
          desktop[0]={fte:5};
          desktop[1]={fte:3};
          desktop[2]={fte:1};

          dba[0]={fte:2};
          dba[1]={fte:2};
          dba[2]={fte:1};

          integration[0]={fte:2};
          integration[1]={fte:2};
          integration[2]={fte:2};

          developer[0]={fte:4};
          developer[1]={fte:3};
          developer[2]={fte:2};

          service[0]={fte:5};
          service[1]={fte:4};
          service[2]={fte:3};


          support[0]={fte:3};
          support[1]={fte:3};
          support[2]={fte:2};
          
          //

          var people={security,network,server,desktop,dba,integration,developer,service,support}
          

    
          function securityChart(){

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
                      data: [people.security[0].fte,people.security[1].fte,people.security[2].fte],
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
                    data: [people.network[0].fte,people.network[1].fte,people.network[2].fte],
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
                      data: [people.server[0].fte,people.server[1].fte,people.server[2].fte],
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
                      data: [people.desktop[0].fte,people.desktop[1].fte,people.desktop[2].fte],
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
                    data: [people.dba[0].fte,people.dba[1].fte,people.dba[2].fte],
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
                    data: [people.integration[0].fte,people.integration[1].fte,people.integration[2].fte],
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
                    data: [people.developer[0].fte,people.developer[1].fte,people.developer[2].fte],
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
                    data: [people.service[0].fte,people.service[1].fte,people.service[2].fte],
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
                    data: [people.support[0].fte,people.support[1].fte,people.support[2].fte],
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
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));




$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 5, //10 items above 1000px browser width
      responsive : {
        100: { items: 1    },
        480 : { items : 2  }, 
        768 : { items : 3  }, 
        1024 : { items : 4 },
        1400 : {items: 5},
    },
  });
 
  // Custom Navigation Events
  // $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  // $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  // $(".play").click(function(){
  //   owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  // })
  // $(".stop").click(function(){
  //   owl.trigger('owl.stop');
  // })
 
});


