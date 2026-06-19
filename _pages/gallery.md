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
  <div class="col-4 mt-3" id="istu2026-junbin">
    {% include figure.liquid path="assets/img/ISTU2026-junbin.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">JunBin Ko by his poster on optical-tracking–guided focused ultrasound for blood–brain barrier opening, presented at ISTU 2026 in Trondheim, Norway.</div>
  </div>
  <div class="col-4 mt-3" id="istu2026-cynthia">
    {% include figure.liquid path="assets/img/ISTU2026-cynthia.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">Cynthia Imtiaz sharing her work on focused-ultrasound delivery of Rg3 nanoparticles for Parkinson's disease at ISTU 2026 in Trondheim, Norway.</div>
  </div>
  <div class="col-4 mt-3" id="ask2026-guhnhyeok">
    {% include figure.liquid path="assets/img/ASK-guhnhyeok.jpeg" class="gallery-thumb rounded z-depth-1" zoomable=true %}
    <div class="caption">GuhnHyeok Ko at the podium presenting underwater radiated-noise measurement of a small USV at the Acoustical Society of Korea Spring Conference 2026, Jungmun, Jeju.</div>
  </div>
</div>
