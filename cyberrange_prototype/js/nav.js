var year = new Date().getFullYear()
if (sessionStorage.getItem("year") != null && sessionStorage.getItem("year") != 0) {year = parseInt(sessionStorage.getItem("year"));}
var round = 1;
if (sessionStorage.getItem("round") != null && sessionStorage.getItem("round") != 0) {round = parseInt(sessionStorage.getItem("round"));}
function addLoadEvent(func)
{
    var oldonload = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}
function reset() {
  sessionStorage.clear();
  round = 1;
  xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://131.183.222.85:8080/resetAssetsData', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function(){
    if(xhr.readyState===4) {
      location.reload(true);
    }
  }
  xhr.send({userID:001, gameID:001, roundNumber:001})

}
function simulate() {
  sure = confirm("This will submit all changes and advance to the next round.  Are you sure you are ready to do this?");
  if(!sure) {return false;}
  else{
    window.location.href="SimLoading.html";
  }
}
var nbar = document.createElement("nav");
//navbar classes added here
nbar.className="navbar navbar-expand-lg navbar-light bg-dark";
nbar.innerHTML=(
  //When changes to the navbar template are made, HTML should be put here
  //as a long string with '\' at the end of each line.
  ' \
				<a class="navbar-brand text-white" href="cyberrange.html"><i class="fas fa-chess-knight"></i> CyberRange <span class="text-info">v1.0</span></a> \
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> \
					<span class="navbar-toggler-icon"></span> \
				</button> \
				<div class="collapse navbar-collapse" id="navbarSupportedContent"> \
					<ul class="navbar-nav mr-auto"> \
						<li class="nav-item active"> \
							<a class="nav-link text-white" href="cyberrange.html">Assets</a> \
						</li> \
						<li class="nav-item"> \
							<a class="nav-link text-white" href="People.html">People</a> \
						</li> \
						<li class="nav-item"> \
							<a class="nav-link text-white" href="policy.html">Policy Decisions</a> \
						</li> \
						<li class="nav-item"> \
								<a class="nav-link text-white" href="process.html">Process Decisions</a> \
						</li>					\
            <li class="nav-item"> \
							<a class="nav-link text-white" href="security_decisions.html">Security Decisions</a> \
						</li> \
            <li class="nav-item"> \
							<a class="nav-link text-white" href="people_security.html">People Decisions</a> \
						</li> \
            <li class="nav-item"> \
							<a class="nav-link text-white" href="asset_decisions.html">Assets Decisions</a> \
						</li> \
            <li class="nav-item"> \
              <a class="nav-link text-white" href="risk.html">Risk Landscape</a> \
            </li> \
					</ul> \
					<form class="form-inline my-2 my-lg-0"> \
						<h5 class="text-white nav-link" id="DisplayYear">Current Year: </h5> \
						<button class="btn btn-outline-danger my-2 my-sm-0" type="button" onclick="javascript:simulate();">Advance Year</button> \
					</form> \
				</div> \
  ');

anchor = document.body.firstChild;
document.body.insertBefore(nbar, anchor);
document.getElementById("DisplayYear").innerHTML+=year+round-1;
