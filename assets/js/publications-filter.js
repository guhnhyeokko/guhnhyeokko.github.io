// Filters the publication list by research area (project).
// Each entry carries `data-area` on its `.row`; the buttons toggle visibility
// and hide year headers that end up with no visible entries.
document.addEventListener("DOMContentLoaded", function () {
  const filter = document.querySelector(".pub-filter");
  const container = document.querySelector(".publications");
  if (!filter || !container) return;

  const buttons = filter.querySelectorAll(".pub-filter-btn");

  function apply(area) {
    container.querySelectorAll("ol.bibliography").forEach(function (list) {
      let anyVisible = false;
      list.querySelectorAll(":scope > li").forEach(function (li) {
        const row = li.querySelector(".row");
        const itemArea = row ? row.getAttribute("data-area") || "" : "";
        const show = area === "all" || itemArea === area;
        li.style.display = show ? "" : "none";
        if (show) anyVisible = true;
      });
      // The year header (<h2>) sits just before each <ol>.
      let header = list.previousElementSibling;
      while (header && header.tagName !== "H2") {
        header = header.previousElementSibling;
      }
      if (header && header.tagName === "H2") {
        header.style.display = anyVisible ? "" : "none";
      }
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      apply(btn.getAttribute("data-area"));
    });
  });
});
