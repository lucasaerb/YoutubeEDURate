console.log("Chrome extension GO!!!");

let titles = document.getElementsByTagName("ytd-grid-video-renderer");
//titles = titles.getElementsByClassName("yt-simple-endpoint style-scope ytd-grid-video-renderer");
//console.log("NEW Titles is: " + titles + '\n');
for(elt of titles){
  console.log("elt:\n");
  console.log(elt);
}
