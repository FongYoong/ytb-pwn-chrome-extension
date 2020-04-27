
let button = document.getElementById('btn');
/*
  chrome.storage.sync.get('color', function(data) {
    button.style.backgroundColor = data.color;
    button.setAttribute('value', data.color);
  });*/
button.onclick = function(element) {
    /*
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
*/
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {

        if(tabs.length > 0 && tabs[0].hasOwnProperty("url")){
            //https://www.youtube.com/watch?v=3iCifD8gZ0Q
            //console.log(tab[0]["url"].split("https://www.")[1]);
            let newUrl = "https://www.pwn" + tabs[0]["url"].split("https://www.")[1]; //append 'pwn' to the Youtube url
            //console.log(newUrl);
            chrome.tabs.update(tabs.id, {url: newUrl});
        }
    });
};