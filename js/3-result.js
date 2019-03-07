/**
 * Check if exercise three has been completed
 */
(function() {
  var tests = [
      {
        name: "<header>",
        result: false
      },
      {
        name: 'role="main"',
        result: false
      },
      {
        name: "<article>",
        result: false
      },
      {
        name: "<time> (EXTRA CHALLENGE)",
        result: false
      }
    ],
    resultEl = document.getElementById("result"),
    headerEl = document.querySelector(".site-header"),
    mainEl = document.querySelector(".messages"),
    articleEls = document.querySelectorAll(".message"),
    timeEls = document.querySelectorAll(".message__time"),
    correctTimes = ["2018-03-25 19:25", "2018-03-25 19:35", "2018-03-25 19:38"],
    successMessage = "✔",
    failMessage = "✘";

  if (typeof headerEl !== "undefined" && headerEl.tagName === "HEADER") {
    tests.find(function(test) {
      return test.name === "<header>";
    }).result = true;
  }

  if (
    typeof mainEl !== "undefined" &&
    mainEl.hasAttribute("role") &&
    mainEl.getAttribute("role") === "main"
  ) {
    tests.find(function(test) {
      return test.name === 'role="main"';
    }).result = true;
  }

  if (articleEls.length) {
    let result = true;
    result.article = true;
    articleEls.forEach(function(el) {
      if (el.tagName !== "ARTICLE") {
        result = false;
      }
    });
    tests.find(function(test) {
      return test.name === "<article>";
    }).result = result;
  }

  if (timeEls.length) {
    let result = true;
    timeEls.forEach(function(el, index) {
      if (
        el.tagName !== "TIME" ||
        !el.hasAttribute("dateTime") ||
        new Date(el.getAttribute("dateTime")).getTime() !== new Date(correctTimes[index]).getTime()
      ) {
        result = false;
      }
    });
    tests.find(function(test) {
      return test.name === "<time> (EXTRA CHALLENGE)";
    }).result = result;
  }

  tests.forEach(function(test) {
    var resultMessage = test.result ? successMessage : failMessage;
    var el = document.createElement("div");
    el.className = "result__item";
    el.appendChild(document.createTextNode(resultMessage + " Added " + test.name));
    resultEl.appendChild(el);
  });
})();
