// var bgvid;
// var playhead;
// var vidLoaded;

// function preload(){
//     bgvid = createVideo("./assets/SAMloop-luke-edit-2.mp4", loadVid);
//     bgvid.parent('bgvid');
// }

// function setup(){
//     playhead = 0.1;
//     vidLoaded = false;
// }

// function draw(){
// }

// function windowResized(){
// }

// function loadVid(){
//     bgvid.volume(0);
//     bgvid.attribute('width', '');
//     bgvid.attribute('height', '');
//     //bgvid.pause();
//     vidLoaded = true;
//     bgvid.loop();
// }

function scrollOnClick(_x,_y){
    window.scrollTo(_x,_y);
}
