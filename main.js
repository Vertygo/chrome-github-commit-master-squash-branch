(function () {
  var keepScanning = false;
  function scanForSquashAndMergeButtons() {
    if (document.location.href.indexOf("/pull/") === -1) {
      return;
    }

    var isMaster =
      document.querySelector("span.commit-ref a span").innerText === "master";

    var button = isMaster
      ? document.querySelector('.width-full.select-menu-item[value="merge"]')
      : document.querySelector('.width-full.select-menu-item[value="squash"]');

    if (button) {
      keepScanning = false;
      button.click();
    }
  }

  const interval = 1000;

  function doer() {
    scanForSquashAndMergeButtons();

    if (keepScanning) {
      setTimeout(doer, interval);
    }
  }

  setTimeout(doer, interval);
})();
