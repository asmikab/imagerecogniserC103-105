Webcam.set({
    width:300,height:300,image_format:"png",png_quality:600
});

camera=document.getElementById("camera")
Webcam.attach(camera);

function captureimage(){

   Webcam.snap(function(url){
 
      document.getElementById("capturedimage").innerHTML='<img id="ci" src="'+url+'">'

   }) 

}

console.log(ml5.version);

asmika=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ooh8Al7ix/model.json',modelLoaded);

function modelLoaded(){

     console.log("Model is Loaded");

}

function identify(){

    image=document.getElementById("ci");
    asmika.classify(image,gotResult);

}
function gotResult(error,answer){
    if(error){

      console.error(error);

    }
    else{
      console.log(answer);
    }
    
    
    


}