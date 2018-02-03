console.log("In the extension!!");

let a_tags = document.getElementsByTagName('a')

//let titles = a_tags.getElementById('title');
for(elm of a_tags){
  if (elm.id == "video-title"){
    console.log(elm.title);
  }
}
