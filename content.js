/* TODO
- Extract url
- Request HTML from rewordify
- Extract article content
- Display article content
- badge update with score
*/



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




chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.text === "click") {
            var site_url = window.location.href;
            alert("running on ".concat(site_url))

            get_data(site_url, function(page_html) {
                console.log(page_html)
                article = extract_article(page_html);
                // output article
                //$('#text').append(article)
            });


            get_data(site_url, function(page_html) {
                alert(page_html)
                article = extract_article(page_html);
                alert(article)
            });
        }
    }
);
