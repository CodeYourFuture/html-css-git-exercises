/**
 * Convert URLs in messages into links
 */
(function() {
  var messages = document.querySelectorAll(".message__content");
  if (!messages.length) {
    alert(
      "You have linked the JavaScript, but not at the correct location in the code. The script tag must be added near the end of the <body> tag."
    );
  }
  messages.forEach(function(message) {
    var urls = message.innerHTML.match(/\bhttps?:\/\/\S+/gi);
    if (urls) {
      urls.forEach(function(url) {
        message.innerHTML = message.innerHTML.replace(
          url,
          '<a href="' + url + '">' + url + "</a>"
        );
      });
    }
  });
})();
