// JavaScript source code
var data;
var xhr = new XMLHttpRequest();
var chartData;

xhr.open("POST", 'http://131.183.222.85:8080/riskLevel', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        data = xhr.response;
        data = JSON.parse(data);
        var computers;
        for(var i=0;i<data.length;i++)
        {
            if(data[i].assetType==="Computers"){
                    if(data[i].os_protocol==="XP"){
                        computers={
                            xp:{
                            age:data[i].age,
                            numberOfDevices:data[i].num,
                            unitCost:data[i].unitCost,
                            }
                        }
                    }
                    else if(data[i].os_protocol==="W7"){
                            computers["w7"]={
                                age:data[i].age,
                                numberOfDevices:data[i].num,
                                unitCost:data[i].unitCost,
                        }
                    }
                    else if(data[i].os_protocol==="iOS(9)"){
                        computers["ios9"]={
                            age:data[i].age,
                            numberOfDevices:data[i].num,
                            unitCost:data[i].unitCost,
                    }
                }
            }
        }
        console.log(computers);
                   

    } 
}
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));



var charts={
computers:function(){
    var computerData={
cards:function(){
    for(i=1;i<=3;i++){
document.getElementById("card"+i).innerHTML=""
document.getElementById("card"+i).innerHTML+='\
<h1 align="center">Computers</h1>\
'
}
},
ageOfDevices: function (){
    var age_1=0,age_2=0,age_3=0;
    for(var i = 0; i < data.length; i++)
    {
        if(data[i].assetType==="Computers")
        {
        if(data[i].age<2)
        {
        age_1=age_1+data[i].num;
        }
        else if(data[i].age>=2&&data[i].age<=5)
        age_2=age_2+data[i].num;
        else if(data[i].age>5)
        age_3=age_3+data[i].num;
        }
    }
    var compctx = document.getElementById('Chart1').getContext('2d');
    if(window.age_chart && window.age_chart !== null){
        window.age_chart.destroy();
    }
    window.age_chart = new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',
  
        // The data for our dataset
        data: {
            labels: ["0-2 Years", "2-5 Years", "5+ Years"],
            datasets: [{
                label: "Age of Computer",
                backgroundColor: ['#28A745','#17A2B8','#6C757D'],
                data: [age_1,age_2,age_3],
            }]
        },
  
        // Configuration options go here
        options: {
            legend:{},
          title: {
            display: true,
            text: 'Age of Computers',
          }
        }
    });
},
noOfDevices:function(){
    var xp=0,w7=0,w10=0,ios9=0,ios10=0,ios11=0;
    for(var i = 0; i <data.length; i++)
    {
        if(data[i].assetType==="Computers")
        {
        if(data[i].os_protocol==="XP")
        xp=data[i].num;
        else if(data[i].os_protocol==="W7")
        w7=data[i].num;
        else if(data[i].os_protocol==="W10")
        w10=data[i].num;
        else if(data[i].os_protocol==="iOS(9)")
        ios9=data[i].num;
        else if(data[i].os_protocol==="iOS(10)")
        ios10=data[i].num;
        else if(data[i].os_protocol==="iOS(11)")
        ios11=data[i].num;
        }
    }
    var compctx = document.getElementById('Chart2').getContext('2d');
    if(window.no_chart && window.no_chart !== null){
        window.no_chart.destroy();
    }
    window.no_chart= new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["XP", "W7", "W10","iOS9","iOS10","iOS11"],
            datasets: [{
                label:"OS",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#6CF57D','#FF7171','#6F750D'],
                data: [xp,w7,w10,ios9,ios10,ios11],
            }]
        },

        // Configuration options go here
        options: {
            legend:{},
        title: {
            display: true,
            text: 'No. of computers'
        }
        }
    });    
},
unitCost:function(){

    var xp=0,w7=0,w10=0,ios9=0,ios10=0,ios11=0;
    for(var i = 0; i <data.length; i++)
    {
        if(data[i].assetType==="Computers")
        {
        if(data[i].os_protocol==="XP")
        xp=data[i].unitCost;
        else if(data[i].os_protocol==="W7")
        w7=data[i].unitCost;
        else if(data[i].os_protocol==="W10")
        w10=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(9)")
        ios9=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(10)")
        ios10=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(11)")
        ios11=data[i].unitCost;
        }
    }
    var compctx = document.getElementById('Chart3').getContext('2d');
    if(window.cost_chart && window.cost_chart !== null){
        window.cost_chart.destroy();
    }
    window.cost_chart = new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["XP", "W7", "W10","iOS9","iOS10","iOS11"],
            datasets: [{
                label:"OS",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#6CF57D','#FF7171','#6F750D'],
                data: [xp,w7,w10,ios9,ios10,ios11],
            }]
        },

        // Configuration options go here
        options: {
            legend:{},
        title: {
            display: true,
            text: 'unit cost'
        }
        }
    }); 
},
}
computerData.ageOfDevices();
computerData.unitCost();
computerData.noOfDevices();
//computerData.cards();
},
laptops:function(){ 
    var laptopData={
cards:function(){
    for(i=1;i<=3;i++){
document.getElementById("card"+i).innerHTML=""
document.getElementById("card"+i).innerHTML+='\
<h1 align="center">Laptops</h1>\
'
}
},
ageOfDevices:function() {
    var age_1=0,age_2=0,age_3=0;
    for(var i = 0; i < data.length; i++)
    {
        if(data[i].assetType==="Laptops")
        {
        if(data[i].age<2)
        age_1=age_1+data[i].num;
        else if(data[i].age>=2&&data[i].age<=5)
        age_2=age_2+data[i].num;
        else if(data[i].age>5)
        age_3=age_3+data[i].num;
        }
    }
    var compctx = document.getElementById('Chart1').getContext('2d');
    if(window.age_chart && window.age_chart !== null){
        window.age_chart.destroy();
    }
    window.age_chart= new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',
  
        // The data for our dataset
        data: {
            labels: ["0-2 Years", "2-5 Years", "5+ Years"],
            datasets: [{
                label: "Age of Laptops",
                backgroundColor: ['#28A745','#17A2B8','#6C757D'],
                data: [age_1,age_2,age_3],
            }]
        },
  
        // Configuration options go here
        options: {
            legend:{},
          title: {
            display: true,
            text: 'Age of Laptops'
          }
        }
    });
},

noOfDevices:function(){

    var xp=0,w7=0,w10=0,ios9=0,ios10=0,ios11=0;
    for(var i = 0; i <data.length; i++)
    {
        if(data[i].assetType==="Laptops")
        {
        if(data[i].os_protocol==="XP")
        xp=data[i].num;
        else if(data[i].os_protocol==="W7")
        w7=data[i].num;
        else if(data[i].os_protocol==="W10")
        w10=data[i].num;
        else if(data[i].os_protocol==="iOS(9)")
        ios9=data[i].num;
        else if(data[i].os_protocol==="iOS(10)")
        ios10=data[i].num;
        else if(data[i].os_protocol==="iOS(11)")
        ios11=data[i].num;
        }
    }
    var compctx = document.getElementById('Chart2').getContext('2d');
    if(window.no_chart && window.no_chart !== null){
        window.no_chart.destroy();
    }
    window.no_chart = new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["XP", "W7", "W10","iOS9","iOS10","iOS11"],
            datasets: [{
                label:"OS",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#6CF57D','#FF7171','#6F750D'],
                data: [xp,w7,w10,ios9,ios10,ios11],
            }]
        },

        // Configuration options go here
        options: {
            legend:{},
        title: {
            display: true,
            text: 'No. of Laptops'
        }
        }
    });    
},
unitCost:function(){

    var xp=0,w7=0,w10=0,ios9=0,ios10=0,ios11=0;
    for(var i = 0; i <data.length; i++)
    {
        if(data[i].assetType==="Laptops")
        {
        if(data[i].os_protocol==="XP")
        xp=data[i].unitCost;
        else if(data[i].os_protocol==="W7")
        w7=data[i].unitCost;
        else if(data[i].os_protocol==="W10")
        w10=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(9)")
        ios9=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(10)")
        ios10=data[i].unitCost;
        else if(data[i].os_protocol==="iOS(11)")
        ios11=data[i].unitCost;
        }
    }
    var compctx = document.getElementById('Chart3').getContext('2d');
    if(window.cost_chart && window.cost_chart !== null){
        window.cost_chart.destroy();
    }
    window.cost_chart = new Chart(compctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["XP", "W7", "W10","iOS9","iOS10","iOS11"],
            datasets: [{
                label:"OS",
                backgroundColor: ['#28A745','#17A2B8','#6C757D','#6CF57D','#FF7171','#6F750D'],
                data: [xp,w7,w10,ios9,ios10,ios11],
            }]
        },

        // Configuration options go here
        options: {
            legend:{},
        title: {
            display: true,
            text: 'unit cost'
        }
        }
    });    
},
}
laptopData.noOfDevices();
laptopData.ageOfDevices();
laptopData.unitCost();
//laptopData.cards();
}
}

//$('.carousel').carousel('pause')