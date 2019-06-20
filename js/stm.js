var turned = false;

function scrollOnClick(_x,_y){
    window.scrollTo(_x,_y);
}

function toggleNav(){
    document.getElementById("subnav").classList.toggle("subnav-open");
}

function plusToX(){
    if (!turned) {
        document.getElementById("toggle-plus").style.animation = "plus-to-x 0.2s 1 forwards";
        turned = true;
    } else {
        document.getElementById("toggle-plus").style.animation = "x-to-plus 0.2s 1 forwards";
        turned = false;
    }
}