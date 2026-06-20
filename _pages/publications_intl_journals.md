---
layout: page
permalink: /publications/international-journals/
title: International Journals
description: SCI/SCIE indexed journal publications in reversed chronological order
nav: false
---

<!-- International Journal Publications -->

{% include bib_search.liquid %}

<div class="pub-filter" role="group" aria-label="Filter publications by research area">
  <button type="button" class="pub-filter-btn active" data-area="all">All</button>
  <button type="button" class="pub-filter-btn" data-area="therapeutic">Therapeutic</button>
  <button type="button" class="pub-filter-btn" data-area="diagnostic">Diagnostic</button>
  <button type="button" class="pub-filter-btn" data-area="underwater">Underwater</button>
  <button type="button" class="pub-filter-btn" data-area="other">Other</button>
</div>

<div class="publications">

{% bibliography --query @*[category=intl_journal] %}

</div>

<script src="{{ '/assets/js/publications-filter.js' | relative_url | bust_file_cache }}"></script>
