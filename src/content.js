console.log("In the extension!!");

function getTitles(){
  let a_tags = document.getElementsByTagName('a');
  for(elm of a_tags){
    if (elm.id == "video-title"){
      elm.innerHTML = "EDUrate:  %%  ||   " + elm.title;
      
    }
      //elm.setAttribute("style","font-family: Courier; background-color: yellow");
      //elm.aria_label = "Penis: " + elm.aria_label;
      //$(document).ready(function() {
      // $("#video-title").css("color":"red!import");
      //}); -->

  }
}


chrome.runtime.onMessage.addListener(message);


function message(msg,sender,sendResponse){
  console.log(msg.txt);
  if(msg.txt === "activate"){
      getTitles();
  }
}
