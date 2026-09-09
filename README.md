# Bonnie's Nests — website

A simple static website for two vacation rentals, with direct booking through OwnerRez.
No frameworks, no build step: open `index.html` in a browser and it works.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: hero, both homes, why book direct, about, contact footer |
| `puerto-vallarta.html` | Puerto Vallarta property page with booking widget |
| `reno.html` | Reno property page with booking widget |
| `css/styles.css` | All styling. Colors and fonts are variables at the top of the file. |
| `js/main.js` | Mobile menu, photo lightbox, booking-widget placeholder swap |
| `images/` | Put real photos here (see below) |

## Preview it locally

Any static server works. From this folder:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## 1. Paste in the OwnerRez booking widget

1. In OwnerRez go to **Settings → Widgets → Create Widget** and create a **Booking/Inquiry** widget for each property.
2. OwnerRez gives you embed code that looks like this:

   ```html
   <div class="ownerrez-widget" data-propertyId="abc123..." data-widget-type="Booking/Inquiry" data-widgetId="def456..."></div>
   <script src="https://secure.ownerreservations.com/widget.js"></script>
   ```

3. Open `puerto-vallarta.html` (and then `reno.html`), find the `<div class="ownerrez-widget" ...>` inside the booking card, and replace `REPLACE_WITH_PROPERTY_ID` and `REPLACE_WITH_WIDGET_ID` with your real values.
4. The `widget.js` script tag is already at the bottom of each property page. You only need it once per page, so don't paste a second copy.
5. The dashed "Booking calendar goes here" box disappears automatically once the real widget loads.

Other OwnerRez widgets (availability calendar, reviews, property search) use the same `<div class="ownerrez-widget">` pattern and can be dropped anywhere on a page.

## 2. Swap the placeholder photos

All photos currently point at `https://picsum.photos/...` (random stock photos). To use real ones:

1. Save photos into the `images/` folder, e.g. `images/pv-living-room.jpg`. Aim for 1600px wide or larger, under ~500 KB each.
2. In the HTML, replace the `src` (and for gallery photos, the `href`) with the new path, e.g. `images/pv-living-room.jpg`.
3. Update the `alt` text so it describes the photo.

## 3. Edit the property details

All copy (descriptions, bed/bath counts, amenities, check-in times, nightly "from" prices) is placeholder text written to look realistic. Edit it directly in the HTML. Search for `TODO` to find the spots most likely to need real info (contact email, phone, prices).

## 4. Put it online

Any static host works. The simplest free options:

- **Netlify**: drag this folder onto https://app.netlify.com/drop.
- **GitHub Pages**: push the folder to a repo and enable Pages in the repo settings.
- **Cloudflare Pages**: connect the repo or upload the folder.

Then point your domain (e.g. `bonniesnests.com`) at the host following their DNS instructions.
