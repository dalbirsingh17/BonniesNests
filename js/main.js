// Bonnie's Nests — small helpers. No dependencies.

// 1. Mobile navigation toggle
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (!nav || !toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// 2. Gallery lightbox: click a photo to view it large
(function () {
  var gallery = document.querySelector('.gallery');
  if (!gallery) return;
  gallery.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    e.preventDefault();
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Close">&times;</button>' +
      '<img src="' + link.getAttribute('href') + '" alt="' + (link.querySelector('img').alt || '') + '">';
    function close() { box.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(ev) { if (ev.key === 'Escape') close(); }
    box.addEventListener('click', function (ev) { if (ev.target !== box.querySelector('img')) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(box);
  });
})();

// 3. Booking widget placeholder: hide the dashed placeholder once the real
//    OwnerRez widget has rendered inside the .ownerrez-widget div.
(function () {
  var widget = document.querySelector('.ownerrez-widget');
  var placeholder = document.querySelector('.widget-placeholder');
  if (!widget || !placeholder) return;
  var isConfigured = !/REPLACE_WITH/.test(widget.getAttribute('data-widgetId') || '');
  if (!isConfigured) return; // keep the placeholder visible until IDs are pasted in
  var observer = new MutationObserver(function () {
    if (widget.childElementCount > 0) { placeholder.hidden = true; observer.disconnect(); }
  });
  observer.observe(widget, { childList: true, subtree: true });
})();
