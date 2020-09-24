(function () {
  var keepScanning = false;
  function scanForSquashAndMergeButtons() {
    if (document.location.href.indexOf("/pull/") === -1) {
      return;
    }

    var isMaster =
      document.querySelector("span.commit-ref a span").innerText === "master";

    if (isMaster) {
      console.debug("selecting commit to master");

      document
        .querySelector('.width-full.select-menu-item[value="merge"]')
        .click();
    } else {
      console.debug("selecting squash to branch");
      document
        .querySelector('.width-full.select-menu-item[value="squash"]')
        .click();
    }
    
    keepScanning = false;
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
