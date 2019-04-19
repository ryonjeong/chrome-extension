
captureBtn.onclick = function(element) {
    // console.log("onclick event function");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // console.log(tabs[0].id);

        chrome.pageCapture.saveAsMHTML({tabId: tabs[0].id}, function(mhtml) {
            // console.log(mhtml);

            var XHR = new XMLHttpRequest();
            var FD = new FormData();
            var FREADER = new FileReader()

            FD.append("bank", tabs[0].url)
            FD.append("mhtml", mhtml, "bank.mhtml");
            // console.log(FREADER.readAsBinaryString(mhtml))
            // FD.append("file",FREADER.readAsBinaryString(mhtml))

            XHR.addEventListener('load', function(event){
                console.log("Data sent and response loaded.");
            });

            XHR.addEventListener('error', function(event){
                console.log("OOOPS! something went wrong.");
            });

            XHR.open('POST', 'http://127.0.0.1:8888/mhtml', true)

            // XHR.setRequestHeader('Authorization', 'Token token=<redacted>');

            XHR.send(FD);
        });
    });
};