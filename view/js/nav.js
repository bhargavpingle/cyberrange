var nbar = document.createElement("nav");
//navbar classes added here
nbar.className="navbar navbar-expand-lg navbar-light bg-dark";
nbar.innerHTML=(
  //When changes to the navbar template are made, HTML should be put here
  //as a long string with '\' at the end of each line.
  ' \
				<a class="navbar-brand text-white href="#"><i class="fas fa-chess-knight"></i> CyberRange <span class="text-info">beta</span></a> \
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> \
					<span class="navbar-toggler-icon"></span> \
				</button> \
				<div class="collapse navbar-collapse" id="navbarSupportedContent"> \
					<ul class="navbar-nav mr-auto"> \
						<li class="nav-item active"> \
							<a class="nav-link text-white" href="#">Technology</a> \
						</li> \
						<li class="nav-item"> \
							<a class="nav-link text-white" href="#">People</a> \
						</li> \
						<li class="nav-item"> \
							<a class="nav-link text-white" href="#">Policy</a> \
						</li> \
						<li class="nav-item"> \
								<a class="nav-link text-white" href="#">Process</a> \
						</li>					\
					</ul> \
					<div class="nav-item dropdown "> \
							<button class="nav-link dropdown-toggle btn btn-outline-success"  id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true"> \
							</button> \
							<div class="dropdown-menu dropdown-menu-right " > \
								<a class="dropdown-item" href="#"><i class="far fa-user"></i> Profile</a> \
								<div class="dropdown-divider"></div> \
								<a class="dropdown-item" href="#"><i class="fas fa-sliders-h"></i> Setting</a> \
								<div class="dropdown-divider"></div> \
								<a class="dropdown-item" href="#"><i class="fas fa-shopping-basket"></i> Market Place</a> \
								<div class="dropdown-divider"></div> \
								<a class="dropdown-item" href="#"><i class="far fa-star"></i> Scores</a> \
							</div> \
					</div> \

				</div> \
		   \
  ');
anchor = document.body.firstChild;
document.body.insertBefore(nbar, anchor);

