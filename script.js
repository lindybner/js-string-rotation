window.onload = () => {
  animateString("output"); // Call the animateString function when the window is fully loaded.
};

function animateString(id) {
  // Get the 'output' element by its ID
  let element = document.getElementById(id);

  // Get the text node within the 'output' element (assuming no other children)
  let textNode = element.childNodes[0];

  // Get the current text content of the text node
  let text = textNode.data;

  setInterval(() => {
    // Move the last character to the front of the string
    text = text[text.length - 1] + text.substring(0, text.length - 1);

    // Update the text content of the text node with the modified string
    textNode.data = text;
  }, 100); // Update the rotation every 100 milliseconds
}
