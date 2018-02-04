function getTitles(){
  let a_tags = document.getElementsByTagName('a');
  for(elm of a_tags){
    if (elm.id == "video-title"){
      var i =  getrate(elm.title.toLowerCase());
      elm.innerHTML = "EDUrate:  ".bold()+ i + "%  ||   " + elm.title;
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

function getrate(title){
  var rate_count = 0;
  let txt = read();

  for(i in txt){
    if(title.includes(i)){
      rate_count += 1;
    }
  }
  return (rate_count/title.length)*100;
}

chrome.runtime.onMessage.addListener(message);

function message(msg,sender,sendResponse){
  console.log(msg.txt);
  if(msg.txt === "activate"){
      getTitles();
  }
}
