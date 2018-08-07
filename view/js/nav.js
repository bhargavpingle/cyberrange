var nbar = document.createElement("nav");
//navbar classes added here
nbar.className="navbar navbar-dark bg-dark";
nbar.innerHTML=(
  //When changes to the navbar template are made, HTML should be put here
  //as a long string with '\' at the end of each line.
  '<span class="navbar-brand mb-0 h1"><i class="fas fa-chess-knight"></i> \
  Home <span class="text-muted">Beta Version</span></span>');
anchor = document.body.firstChild;
document.body.insertBefore(nbar, anchor);
