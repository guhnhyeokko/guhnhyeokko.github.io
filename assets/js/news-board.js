// Client-side search + classification filter for the /news bulletin board.
// Hides non-matching rows and keeps the visible-count readout in sync.
document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".news-board");
  if (!board) return;

  const rows = Array.from(board.querySelectorAll(".news-board-row"));
  const search = board.querySelector(".news-board-search");
  const filter = board.querySelector(".news-board-filter");
  const count = board.querySelector(".news-board-count");
  const empty = board.querySelector(".news-board-empty");

  function apply() {
    const term = (search ? search.value : "").trim().toLowerCase();
    const tag = filter ? filter.value : "all";
    let visible = 0;

    rows.forEach(function (row) {
      const titleEl = row.querySelector(".news-board-title");
      const title = (titleEl ? titleEl.textContent : "").toLowerCase();
      const rowTag = row.getAttribute("data-tag") || "";
      const matchTag = tag === "all" || rowTag === tag;
      const matchTerm = term === "" || title.indexOf(term) !== -1;
      const show = matchTag && matchTerm;
      row.style.display = show ? "" : "none";
      if (show) visible++;
    });

    if (count) count.textContent = visible;
    if (empty) empty.hidden = visible !== 0;
  }

  if (search) search.addEventListener("input", apply);
  if (filter) filter.addEventListener("change", apply);
});
