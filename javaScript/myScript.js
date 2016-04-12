
    

    var piclist = new Array (6);
    var locationData = new Array (6);
    var captionData = new Array (6);
    
    var fButtonListener;
    var bButtonListener;

    var whichPic;

    piclist[0] = "images/Teampic.jpg";
    piclist[1] = "images/Teampic2.jpg";
    piclist[2] = "images/Teampic3.jpg";
    piclist[3] = "images/Teampic4.jpg";
    piclist[4] = "images/Teampic5.jpg";
    piclist[5] = "images/Teampic6.jpg";

    locationData[0] = "MFAC Gym, St. Mark's School, Southborough, MA";
    locationData[1] = "Elkins Gym, St. Mark's School, Southborough, MA";
    locationData[2] = "MFAC Gym, St. Mark's School, Southborough, MA";
    locationData[3] = "Elkins Gym, St. Mark's School, Southborough, MA";
    locationData[4] = "MFAC Gym, St. Mark's School, Southborough, MA";
    locationData[5] = "Elkins Gym, St. Mark's School, Southborough, MA";

    captionData[0] = "Team gathering together";
    captionData[1] = "Look at us dabbing!";
    captionData[2] = "10 seconds on the shot clock";
    captionData[3] = "Gathering before the game";
    captionData[4] = "The bench buddies";
    captionData[5] = "The best squad";



window.onload = function() {
   whichPic = 1; 

   document.getElementById("picImgBox").src = piclist[4];

   fButtonListener = document.getElementById("forwardButton");
   bButtonListener = document.getElementById("backButton");

   fButtonListener.addEventListener('click', function(event) {
              
   	             ++whichPic;
                 if(whichPic >= piclist.length ){
                  whichPic = 0;
                 }
                 document.getElementById("locationStation").innerHTML = locationData[whichPic];
                 document.getElementById("picImgBox").src = piclist[whichPic];
                 document.getElementById("captionLoc").innerHTML = captionData[whichPic];
   });

   bButtonListener.addEventListener('click', function(event) {
              
   	           whichPic=whichPic-1;
                 if(whichPic < 0){ 
                  whichPic = piclist.length - 1;
                 }
                 document.getElementById("locationStation").innerHTML = locationData[whichPic];
                 document.getElementById("picImgBox").src = piclist[whichPic];
                 document.getElementById("captionLoc").innerHTML = captionData[whichPic];
   });

};