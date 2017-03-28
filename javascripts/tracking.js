$(document).ready(function() {

  // return a string which is used
  var getActionLabel = function() {
    var title = document.title;
    if (title.length < 1) {
      title = "(No title)";
    }
    var searchString = window.location.search;
    var params = parseQueryString(searchString.substring( searchString.indexOf('?') + 1 ));
    var campaignId = params['ea.campaign.id'];

    return title + ' [' + campaignId + ']';
  }

  // from http://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
  var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }

    return params;
  };

  $('.share-links').each(function(i, buttons) {
    $(buttons).find('a').on('click', function(ev) {
      if (typeof ga === "function") {
        var label = getActionLabel();
        // need attribute data-share set on share link
        var eventAction = ev.currentTarget.getAttribute('data-share');
        ga('send', 'event', 'share', eventAction, label);
      }
    });
  });

  // to prevent errors on old browsers
  if (typeof window.sessionStorage === "undefined") {
    window.sessionStorage = {};
      // NOTE: this degrades functionality as the state saved in the
      // sessionStorage cannot be recovered
    window.sessionStorage.getItem = function () { return undefined };
    window.sessionStorage.setItem = function () { return undefined };
  }
  // if a (hidden) field with the name "track-submission" is present in the DOM
  // e.g. on the thankyou page, we track a form submission in GA
  var $submissionTrigger = $('input[name=track-submission]');
  if ($submissionTrigger.length > 0 && $submissionTrigger.val() == "1" && sessionStorage.getItem('sentFormSubmission') !== '1') {
    if (typeof ga === "function") {
      var label = getActionLabel();
      ga('send', 'event', 'form', 'submitted', label);
      sessionStorage.setItem('sentFormSubmission', '1');
    }
  }

});
