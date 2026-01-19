---
layout: page
permalink: /publications/domestic-conferences/
title: Domestic Conferences
description: Korean conference presentations in reversed chronological order
nav: false
---

<!-- Domestic Conference Publications -->

<div class="publications">
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" style="width: 5%;">No.</th>
          <th scope="col" style="width: 20%;">Authors</th>
          <th scope="col" style="width: 40%;">Title</th>
          <th scope="col" style="width: 25%;">Conference</th>
          <th scope="col" style="width: 10%;">Year</th>
        </tr>
      </thead>
      <tbody>
        {% assign sorted_conferences = site.data.dom_conferences | sort: "year" | reverse %}
        {% for conf in sorted_conferences %}
          <tr>
            <td>{{ forloop.index }}</td>
            <td>{{ conf.authors }}</td>
            <td>{{ conf.title }}</td>
            <td>{{ conf.conference }}</td>
            <td>{{ conf.year }}</td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>
