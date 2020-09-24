(function () {
  function scanForSquashAndMergeButtons() {
    if (document.location.href.indexOf("/pull/") === -1) {
      return;
    }

    var isMaster =
      document.querySelector("span.commit-ref a span").innerText === "master";

    if (isMaster) {
      document
        .querySelector('.width-full.select-menu-item[value="merge"]')
        .click();
    } else {
      document
        .querySelector('.width-full.select-menu-item[value="squash"]')
        .click();
    }
  }

  const interval = 1000;

  function doer() {
    scanForSquashAndMergeButtons();

    setTimeout(doer, interval);
  }

  setTimeout(doer, interval);
})();
