var nbar = document.createElement("nav");
nbar.className="navbar navbar-dark bg-dark";
nbar.innerHTML=(
  '<span class="navbar-brand mb-0 h1"><i class="fas fa-chess-knight"></i> \
  Home <span class="text-muted">Beta Version</span></span>');
anchor = document.body.firstChild;
document.body.insertBefore(nbar, anchor);
