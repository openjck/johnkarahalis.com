// Track all outbound link clicks with Umami.
//
// This is based on code from the Umami docs:
// https://umami.is/docs/track-outbound-links
const eventName = "outbound-link-click";
document.querySelectorAll("a").forEach((a) => {
  if (a.host !== window.location.host && !a.getAttribute("data-umami-event")) {
    a.setAttribute("data-umami-event", eventName);
    a.setAttribute("data-umami-event-url", a.href);
  }
});
