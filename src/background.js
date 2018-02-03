console.log("In background!");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log(tab);
    let msg = {
      "txt" : "activate"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}
