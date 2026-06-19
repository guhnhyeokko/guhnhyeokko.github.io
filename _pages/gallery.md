---
layout: page
permalink: /gallery/
title: Gallery
description: Photos from conferences, fieldwork, and lab activities
nav: true
nav_order: 5
---

Photos from our conferences, fieldwork, and lab activities.

{% comment %}
HOW TO ADD AN ALBUM

1. Put your photos in assets/img/gallery/ (e.g. ica2026-01.jpg, ica2026-02.jpg ...).
2. Copy one album block below, then change the "##" heading, the image `path`s, and the caption.
3. `zoomable=true` makes each photo click-to-enlarge. Use col-sm-4 for 3 photos per row, col-sm-6 for 2.
4. Commit & push (or just send me the photos and I'll add them).
   The "Sample Album" below uses placeholder images — replace it with a real event.
   {% endcomment %}

## Sample Album — replace with your event (e.g. ICA 2026)

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/gallery/sample-1.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/gallery/sample-2.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/gallery/sample-3.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">Sample album — replace these with your conference / lab photos.</div>
