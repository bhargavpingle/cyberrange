window.onload = function(){
    var decisionlev = [];
    var xhr = new XMLHttpRequest();


    xhr.open("POST", 'http://131.183.222.85:8080/processes', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            data = xhr.response;
            window.data = JSON.parse(data);
            for(var i = 0; i < data.length; i++)
            {
                decisionlev[i] = data[i].decisionLevel;
            }
            console.log(data);
            show();
        } 
    }
xhr.send(JSON.stringify({userID:1,gameID:1,roundNumber:round}));

    function show() {
        console.log(data.length);
        for(var i = 0; i < data.length; i++)
        {
            var j = i+1;
            document.getElementById("processName" + j).innerHTML = data[i].processName;
            document.getElementById("declev"+ j).innerHTML = decisionlev[i];
            document.getElementById("profac" + j).innerHTML = Math.round(data[i].weight * Math.log(decisionlev[i] + 1)*100)/100;
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
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
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
        decisionlev[1] = document.getElementById("decisions2").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
        var sample_data = {
            processLevel:document.getElementById("decisions2").value,
            processID:'2',
            gameID:data[0].gameID,
            userID:data[0].userID,
            roundNumber:data[0].roundNumber};
        sample_load(sample_url, sample_data, sample_callback);
        document.getElementById("declev2").innerHTML = decisionlev[1];
        document.getElementById("profac2").innerHTML = Math.round(data[1].weight * Math.log(decisionlev[1] + 1)*100)/100;
    }

    document.getElementById("submit3").onclick = function()
    {
        decisionlev[2] = document.getElementById("decisions3").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
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
        decisionlev[3] = document.getElementById("decisions4").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
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
        decisionlev[4] = document.getElementById("decisions5").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
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
        decisionlev[5] = document.getElementById("decisions6").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
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
        decisionlev[6] = document.getElementById("decisions1").value;
        show();
        console.log('Method called');
        var sample_url = 'http://131.183.222.85:8080/pushProcessDecisions';
        var sample_data = {
            processLevel:document.getElementById("decisions7").value,
            processID:'7',
            gameID:data[0].gameID,
            userID:data[0].userID,
            roundNumber:data[0].roundNumber};
        sample_load(sample_url, sample_data, sample_callback);
    }
