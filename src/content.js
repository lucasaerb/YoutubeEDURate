console.log("In the extension!!");

function getTitles(){
  let a_tags = document.getElementsByTagName('a')
  for(elm of a_tags){
    if (elm.id == "video-title"){
      console.log(elm.title);
}

chrome.runtime.onMessage.addListener(message);

function message(msg,sender,sendResponse){
  console.log(msg.txt);
  if(msg.txt === "activate"){
      getTitles();
      }
    }
  }
}
