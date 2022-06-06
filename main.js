nosex=""
nosey=""
leftwristx=""
rightwristx=""

function setup() {
    canvas=createCanvas(380 , 380)
    canvas.position(600 , 100)
    video=createCapture(VIDEO)
    video.size(380 , 380)
    video.position(100 , 100)
    posenet=ml5.poseNet(video , modelloaded)
    posenet.on("pose" , getposes)
}

function modelloaded() {
    console.log("model is loaded")
}

function getposes(results) {
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log(nosex , nosey)
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        console.log(leftwristx , rightwristx)
    }
}