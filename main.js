img = "";
status = "";
objects = [];

function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(250,250);
    video.hide();
}



function draw() {
    image(video, 0, 0, 250, 250);
             console.log("Length = "+ objects.length);
             for (i = 0; i < objects.length; i++) {
                if(objects[i].label == "person"){
                 document.getElementById("number_of_objects").innerHTML = "Baby Detected";
                    //alert sound will stop playing
                }
                else {
                   document.gettElementById("number_of_objects").innerHTML = "Baby Not Detected";
                           //alert sound will start playing
                }
            }
         if (objects.length <= 0){
            document.getElementById("number_of_objects").innerHTML = "Object Not Detected";
            //alert sound will start playing
         }
}


function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

