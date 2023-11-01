let selectedElements = [];

function enableSelectionMode() {
  const interactiveElements = document.querySelectorAll(
    ".interactive-btn, .interactive-link, .interactive-dropdown"
  );
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.border = "2px solid orange"; // or any other visual indicator
    });

    element.addEventListener("mouseout", () => {
      element.style.border = "none"; // remove the border on mouseout
    });

    element.addEventListener("click", () => {
      if (!selectedElements.includes(element)) {
        selectedElements.push(element);
        simulateEvent(element);
        element.style.border = "2px solid green"; // mark selected elements
      }
    });
  });
}

function simulateEvent(element) {
  const elementType = getElementType(element);
  const elementLabel = getElementLabel(element);
  console.log(
    `Simulated event sent to GTM: Element type - ${elementType}, Label - ${elementLabel}`
  );
}

function getElementType(element) {
  if (element.classList.contains("interactive-btn")) {
    return "button";
  } else if (element.classList.contains("interactive-link")) {
    return "link";
  } else if (element.classList.contains("interactive-dropdown")) {
    return "dropdown";
  }
  // handle other interactive elements if needed
}

function getElementLabel(element) {
  return element.textContent || element.innerText;
}

enableSelectionMode();
