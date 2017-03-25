var openPage = function(szUrl){
    chrome.tabs.create({
      selected: true,
      url: szUrl
    });
}

function readDataFile(){
  //Ref: http://stackoverflow.com/questions/13832251/how-to-read-and-display-file-in-a-chrome-extension
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL('data.txt'), true);
  xhr.onreadystatechange = function()
  {
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
      {
        var obj = JSON.parse(xhr.responseText);
        obj.urls.map(openPage);
      }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
  readDataFile();
});
