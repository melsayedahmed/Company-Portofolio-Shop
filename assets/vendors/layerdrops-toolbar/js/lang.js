window.onload = function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'ES', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
    "google_translate_element"
  );
}

function triggerHtmlEvent(element, eventName) {
  var event;
  if (document.createEvent) {
    event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent("on" + event.eventType, event);
  }
}
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}
$(".language-feature button").on("click", function (e) {
  e.preventDefault();
  window.location = jQuery(this).attr("data-href");
  deleteAllCookies();

  let thmLogo = "images/nav-logo.png";
  let dLogo = "images/logo-dark.png";
  let fLogo = "images/nav-logo.png";
  let favicon = "images/favicon.png";
  let error404 = "images/icons/404-image.png";

  $("#thm-logo").attr("src", thmLogo);
  $("#dLogo").attr("src", dLogo);
  $("#fLogo").attr("src", fLogo);
  $("#error-404").attr("src", error404);
  $("#fav-shortcut").attr("href", favicon);
  $("#fav-icon").attr("href", favicon);

  Cookies.remove("logo-img");
  Cookies.remove("d-logo");
  Cookies.remove("logo-img-footer");
  Cookies.remove("favicon");
  Cookies.remove("error-404");

  Cookies.set("logo-img", thmLogo, { expires: 365, path: "/" });
  Cookies.set("logo-img-footer", fLogo, {
    expires: 365,
    path: "/"
  });
  Cookies.set("d-logo", dLogo, {
    expires: 365,
    path: "/"
  });
  Cookies.set("favicon", favicon, {
    expires: 365,
    path: "/"
  });
  Cookies.set("error-404", error404, {
    expires: 365,
    path: "/"
  });

  location.reload();
});
