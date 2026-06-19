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
HOW TO ADD A PHOTO

1. Put your photo in assets/img/ (or assets/img/gallery/) and note its path.
2. Copy one column block below, then change the image `path` and the caption text.
3. Each photo is independent with its own title underneath — no need to group by event.
4. `zoomable=true` makes each photo click-to-enlarge. Photos flow 3 per row (col-4),
   wrapping to new rows automatically as you add more.
   Commit & push, or just send me the photos and I'll add them.
{% endcomment %}

<div class="row">
  <div class="col-4 mt-3">
    {% include figure.liquid path="assets/img/ISTU2026-junbin.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">JunBin Ko — ISTU 2026, Trondheim</div>
  </div>
  <div class="col-4 mt-3">
    {% include figure.liquid path="assets/img/ISTU2026-cynthia.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">Cynthia Imtiaz — ISTU 2026, Trondheim</div>
  </div>
  <div class="col-4 mt-3">
    {% include figure.liquid path="assets/img/ASK-guhnhyeok.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">GuhnHyeok Ko — Acoustical Society of Korea Spring 2026, Jungmun, Jeju</div>
  </div>
</div>
