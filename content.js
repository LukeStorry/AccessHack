// Uses Rewordify to simplify website
function get_data(site_url, callback) {
    $.get(
        "https://rewordify.com/rwweb.php?userdata=".concat(site_url), {},
        callback
    );
}

// selects only the article div (hard-coded for Guardian)
function extract_article(page_html) {
    return $('<div>' + page_html + '</div>').find("#article > div.content__main.tonal__main.tonal__main--tone-news > div > div.content__main-column.content__main-column--article.js-content-main-column > div.content__article-body.from-content-api.js-article__body").html()
}


function extract_title(page_html) {
  return $('<div>' + page_html + '</div>').find("#article > div.hide-on-mobile > header > div.content__header.tonal__header > div > div > h1").html()
}


chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.text === "click") {
            var site_url = window.location.href;
            //alert("running on ".concat(site_url));
            get_data(site_url, function(page_html) {

                var readscore_before = score(document.body.innerHTML);
                var title = extract_title(page_html);
                var article = extract_article(page_html);
                var readscore_after = score(article);
                alert("Reading score :".concat((Math.round(readscore*10)/10).toString()));
                alert(article)
                out = " <h1> ".append(title).append(" </hl> <p>").append(article);
                document.body.innerHTML = out;
            });
        }
    }
);
