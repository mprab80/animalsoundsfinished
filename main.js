function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aJz_hMtIz/model.json", { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("apple").innerHTML="I can hear- "+ results[0].label;
        img=document.getElementById("animal_image");
        if (results[0].label == "dog"){
            img.src="dog.jpg";
        }
        else if (results[0].label == "cat"){
        img.src="cat.jpg";
        }
        else {
            img.src="download.png";
        }
    }
}