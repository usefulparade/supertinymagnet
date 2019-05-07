var bgvid;
var playhead;
var vidLoaded;

function preload(){
    bgvid = createVideo("../assets/HomeMovie.mp4", loadVid);
    bgvid.size(windowWidth,windowHeight);
    bgvid.parent('bgvid');
}

function setup(){
    playhead = 0.1;
    vidLoaded = false;
}

function draw(){
}

function windowResized(){
    bgvid.size(windowWidth,windowHeight);
}

function loadVid(){
    bgvid.volume(0);
    //bgvid.pause();
    vidLoaded = true;
    bgvid.loop();
}

function scrollOnClick(_x,_y){
    window.scrollTo(_x,_y);
}