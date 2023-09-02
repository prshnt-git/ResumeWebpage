// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if the screen width is less than or equal to 768 pixels (mobile view)
    if (window.innerWidth <= 768) {
      // Get the .construction-text element
      const constructionText = document.querySelector(".construction-text");
  
      // Check if the element exists
      if (constructionText) {
        // Find the <p> tag inside .construction-text
        const paragraph = constructionText.querySelector("p");
  
        // Check if the <p> tag exists
        if (paragraph) {
          // Hide the text content of the <p> tag
          paragraph.style.display = "none";
        }
      }
    }
  });
  