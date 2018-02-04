let wordList = read();
function getTitles(){
  let a_tags = document.getElementsByTagName('a');
  for(elm of a_tags){
    if (elm.id == "video-title"){
      var rating =  getrating(elm.title.toLowerCase());
      elm.innerHTML = "EDUrate:  ".bold()+ rating + "%  ||   " + elm.title;
    }
  }
}

function read(){
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){}
  };
  xmlhttp.open("GET","https://raw.githubusercontent.com/lucasaerb/YoutubeEDURate/master/wordList.txt" ,true);
  xmlhttp.send();
  return this;
}

function getrating(title){
  var rate_count = 0;

  for(i in wordList){
    if(title.includes(i)){
      rate_count += 1;
    }
  }
  //console.log("TITLE>LENGTH: "+ title.split(/(\s+)/).length);
  return Math.round((rate_count/title.split(/(\s+)/).length)*100);
}

chrome.runtime.onMessage.addListener(message);

function message(msg,sender,sendResponse){
  console.log(msg.txt);
  if(msg.txt === "activate"){
      getTitles();
  }
}
