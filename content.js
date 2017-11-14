str = "test"

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "click") {
            console.log(str);
            chrome.runtime.sendMessage({
                "message": "new_tab",
                "url": str
            });
        }
    }
);
