# Bonnie's Nests — Website Design

**Date:** 2026-09-09
**Status:** Built from these decisions (session was non-interactive, so defaults were chosen and recorded here).

## Goal

A simple, beautiful marketing site for two vacation rentals (Puerto Vallarta, MX and Reno, NV) that lets guests
read about each home and book directly through the OwnerRez booking widget.

## Decisions

| Question | Decision | Why |
|---|---|---|
| Tech stack | Plain HTML + CSS + a little vanilla JS. No framework, no build step. | Easiest thing for a non-developer to edit and host anywhere (Netlify, GitHub Pages, Cloudflare Pages, or the OwnerRez-hosted option). |
| Pages | `index.html`, `puerto-vallarta.html`, `reno.html` | One overview page plus one page per home. Contact lives in the footer of every page. |
| Booking | OwnerRez "Booking/Inquiry" widget on each property page, in a sticky sidebar card. | Guests book without leaving the page. Widget IDs are placeholders until the OwnerRez account is set up. |
| Photos | Placeholder photos from picsum.photos, referenced by URL. | Zero setup. Swap for real photos by dropping files in `images/` and editing the `src` attributes. |
| Brand | "Bonnie's Nests". Warm sand background, deep teal, terracotta accent. Fraunces (headings) + Inter (body). | Reads as boutique and personal rather than corporate. Works for both a beach home and a mountain home. |
| Copy | Invented but realistic property details, clearly marked in the README as placeholders. | Gives the page real shape so layout decisions can be judged. |

## Structure

```
index.html              Home: hero, both properties, why book direct, about, footer
puerto-vallarta.html    Property page
reno.html               Property page
css/styles.css          All styling (CSS variables at the top for easy re-theming)
js/main.js              Mobile nav, gallery lightbox, widget placeholder swap
README.md               How to edit, swap photos, paste widget code, deploy
```

## OwnerRez integration

Each property page contains:

```html
<div class="ownerrez-widget"
     data-propertyId="REPLACE_WITH_PROPERTY_ID"
     data-widget-type="Booking/Inquiry"
     data-widgetId="REPLACE_WITH_WIDGET_ID"></div>
```

and `https://secure.ownerreservations.com/widget.js` is loaded once before `</body>`.
Until real IDs are pasted in, a styled placeholder box is shown; a small script hides it once the widget renders.

## Out of scope (for now)

- Blog, reviews page, multi-language, CMS.
- Custom domain / DNS setup (documented in README as a next step).
