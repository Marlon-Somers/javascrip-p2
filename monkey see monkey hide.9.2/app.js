var openeyes = document.getElementById("monkeyopen");
var closedeyes = document.getElementById("monkeyclosed");


openeyes.style.display = "block";
closedeyes.style.display = "none";

openeyes.onclick = function () {
    openeyes.style.display = "none";
    closedeyes.style.display = "block";
}

closedeyes.onclick = function () {
    openeyes.style.display = "block";
    closedeyes.style.display = "none";
}