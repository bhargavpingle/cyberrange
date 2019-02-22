var security ={
    level1:{
        title: "Security 1",
        employeeNumber: 03,
        costPerEmployee:60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Security 2",
        employeeNumber: 03,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Security 3",
        employeeNumber: 01,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var netEngineer ={
    level1:{
        title: "Network Engineer 1",
        employeeNumber: 03,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Network Engineer 2",
        employeeNumber: 02,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Network Engineer 3",
        employeeNumber: 01,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var ServerAdmin ={
    level1:{
        title: "Server Admin 1",
        employeeNumber: 04,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Server Admin 2",
        employeeNumber: 03,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Server Admin 3",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    }
};

var DesktopEngineer ={
    level1:{
        title: "Desktop Engineer 1",
        employeeNumber: "03",
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Desktop Engineer 2",
        employeeNumber: 01,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Desktop Engineer 3",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    }
};

var DBA ={
    level1:{
        title:"DBA 1",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "DBA 2",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "DBA 3",
        employeeNumber: 01,
        costPerEmployee: 95000,
        trainingPerEmployee: 2000
    }
};

var AppIntegration ={
    level1:{
        title: "App Integration 1",
        employeeNumber: 02,
        costPerEmployee: 80000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "App Integration 2",
        employeeNumber: 02,
        costPerEmployee: 90000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "App Integration 3",
        employeeNumber: 01,
        costPerEmployee: 95000,
        trainingPerEmployee: 2000
    }
};

var AppDeveloper ={
    level1:{
        title: "App Developer 1",
        employeeNumber: 04,
        costPerEmployee: 60000,
        trainingPerEmployee:2000
    },
    level2: {
        title: "App Developer 2",
        employeeNumber: 03,
        costPerEmployee: 70000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "App Developer 3",
        employeeNumber: 01,
        costPerEmployee: 85000,
        trainingPerEmployee: 2000
    }
};

var ServiceDesk ={
    level1:{
        title: "Service Desk 1",
        employeeNumber: 05,
        costPerEmployee: 40000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Service Desk 2",
        employeeNumber: 04,
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Service Desk 3",
        employeeNumber: 03,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    }
};

var DesktopSupport ={
    level1:{
        title: "Desktop Support 1",
        employeeNumber: 03,
        costPerEmployee: 40000,
        trainingPerEmployee: 2000
    },
    level2: {
        title: "Desktop Support 2",
        employeeNumber:03,
        costPerEmployee: 50000,
        trainingPerEmployee: 2000
    },
    level3: {
        title: "Desktop Support 3",
        employeeNumber: 02,
        costPerEmployee: 60000,
        trainingPerEmployee: 2000
    }
};

var peopleType = [security,netEngineer, ServerAdmin, DesktopEngineer, DBA, AppIntegration, AppDeveloper, ServiceDesk, DesktopSupport];

var charts={
    security:function(obj){
        var securityData={
            costPerEmployee:function()
            {
                var compctx = document.getElementById('Chart1').getContext('2d');
                if(window.age_chart && window.age_chart !== null){
                    window.age_chart.destroy();
                }
                window.age_chart = new Chart(compctx, {
                    // The type of chart we want to create
                    type: 'doughnut',
            
                    // The data for our dataset
                    data: {
                        labels: ["level-1", "level-2", "level-3"],
                        datasets: [{
                            label: "Cost Per Employee",
                            backgroundColor: ['#28A745','#17A2B8','#6C757D'],
                            data: [peopleType[obj].level1.costPerEmployee,peopleType[obj].level2.costPerEmployee,peopleType[obj].level3.costPerEmployee],
                        }]
                    },
            
                    // Configuration options go here
                    options: {
                        legend:{},
                    title: {
                        display: true,
                        text: 'Cost Per Employee',
                    }
                    }
                });
            },
            trainingPerEmployee:function(){
                training_level1=security.level1.trainingPerEmployee;
                training_level2=security.level2.trainingPerEmployee;
                training_level3=security.level2.trainingPerEmployee;

                var compctx = document.getElementById('Chart2').getContext('2d');
                if(window.age_chart1 && window.age_chart1 !== null){
                    window.age_chart1.destroy();
                }
                window.age_chart1 = new Chart(compctx, {
                    // The type of chart we want to create
                    type: 'doughnut',
            
                    // The data for our dataset
                    data: {
                        labels: ["level-1", "level-2", "level-3"],
                        datasets: [{
                            label: "training cost per employee",
                            backgroundColor: ['#28A745','#17A2B8','#6C757D'],
                            data: [peopleType[obj].level1.trainingPerEmployee,peopleType[obj].level2.trainingPerEmployee,peopleType[obj].level3.trainingPerEmployee],
                        }]
                    },
            
                    // Configuration options go here
                    options: {
                        legend:{},
                    title: {
                        display: true,
                        text: 'training cost per employee',
                    }
                    }
                });
            },
        }
        securityData.costPerEmployee();
        securityData.trainingPerEmployee();
    },
}




$('.carousel').carousel('pause')







