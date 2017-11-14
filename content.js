function get_data(site_url, callback) {
  $.get(
        "https://rewordify.com/rwweb.php",
        {'userdata': site_url},
        callback
    );
}

function extract_article(page_html) {
    return $('<div>' + page_html + '</div>').find("#article > div.content__main.tonal__main.tonal__main--tone-feature > div > div.content__main-column.content__main-column--article.js-content-main-column").html()
}


var site_url = window.location.href;
alert(site_url)

get_data(site_url, function(page_html) {
  alert(page_html)
  article = extract_article(page_html);
  alert(article)
});



/* TODO
- Extract url
- Request HTML from rewordify
- Extract article content
- Display article content
*/
