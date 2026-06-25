---
layout: page
permalink: /gallery/
title: Gallery
description: Photos from conferences, fieldwork, and lab activities
nav: false
nav_order: 5
---

Photos from our conferences, fieldwork, and lab activities.

{% comment %}
HOW TO ADD A PHOTO

1. Put your photo in assets/img/ (or assets/img/gallery/) and note its path.
2. Copy one `gallery_photo` line below and update `path`, `id`, `caption`, and `short`.
   - caption: full description shown on tablet/desktop
   - short: brief label shown on mobile (omit it to reuse the full caption)
3. Each photo is independent — no need to group by event. Photos flow 3 per row,
   wrapping automatically, and each is click-to-enlarge.
   Commit & push, or just send me the photos and I'll add them.
   {% endcomment %}

<div class="row">
  {% include gallery_photo.liquid id="istu2026-junbin" path="assets/img/ISTU2026-junbin.jpeg" caption="JunBin Ko presenting his poster on optical-tracking–guided focused ultrasound for blood–brain barrier opening at ISTU 2026, Trondheim, Norway." short="JunBin Ko — ISTU 2026" %}
  {% include gallery_photo.liquid id="istu2026-cynthia" path="assets/img/ISTU2026-cynthia.jpeg" caption="Cynthia Imtiaz presenting her work on focused-ultrasound delivery of Rg3 nanoparticles for Parkinson's disease at ISTU 2026, Trondheim, Norway." short="Cynthia Imtiaz — ISTU 2026" %}
  {% include gallery_photo.liquid id="ask2026-guhnhyeok" path="assets/img/ASK-guhnhyeok.jpeg" caption="GuhnHyeok Ko presenting underwater radiated-noise measurement of a small unmanned surface vehicle at the Acoustical Society of Korea Spring Conference 2026, Jungmun, Jeju." short="GuhnHyeok Ko — ASK Spring 2026" %}
</div>
