var openPage = function(szUrl){
    chrome.tabs.create({
      selected: true,
      url: szUrl
    });
}

document.addEventListener('DOMContentLoaded', function () {
  pages = ['https://www.yahoo.com','https://www.google.com','https://duckduckgo.com/','https://www.bing.com']
  pages.map(openPage)
});
