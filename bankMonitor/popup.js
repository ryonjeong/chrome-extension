
captureBtn.onclick = function(element) {
    // console.log("onclick event function");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // console.log(tabs[0].id);

        chrome.pageCapture.saveAsMHTML({tabId: tabs[0].id}, function(mhtml) {
            console.log(mhtml);
            // saveAs(mhtml, tab.title+'.mhtml');
        });
    });
};