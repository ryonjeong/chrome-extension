
captureBtn.onclick = function(element) {
    // console.log("onclick event function");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // console.log(tabs[0].id);

        chrome.pageCapture.saveAsMHTML({tabId: tabs[0].id}, function(mhtml) {
            // console.log(mhtml);

            var xhr = new XMLHttpRequest(), formData = new FormData();  
            formData.append("mhtml", mhtml);
            // formData.append("surveyID", localStorage["ID"]);
            xhr.open("POST", "http://127.0.0.1:8080/mhtml", true);
            // xhr.setRequestHeader('Authorization', 'Token token=<redacted>');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.send(formData);

            console.log("submitMHTML() sent mhtml to server");
        });
    });
};