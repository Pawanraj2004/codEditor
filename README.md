# CodEditor

CodEditor is a simple and interactive online code editor where users can write and execute HTML, CSS, and JavaScript code simultaneously. The project provides a clean interface with live preview and the ability to download the written code.

## Features
* **HTML, CSS, JS Editor:** Write HTML, CSS, and JavaScript code in separate text areas.
* **Live Output Preview:** The output of the code is displayed in real-time in an iframe as the user types.
* **Toggle Input Sections:** Users can hide or show each code section (HTML, CSS, or JS) to focus on specific parts of the code.
* **Download Code:** Download the written code as a `.html` file with a single click.

## Tech Stack
* **HTML**
* **CSS**
* **JavaScript**

## How to Use
1. Open the CodEditor interface.
2. Write your HTML, CSS, and JavaScript code in the respective text areas.
3. The live output will be displayed in the iframe on the right as you type.
4. Use the "+" buttons to hide or show specific sections of the editor.
5. Click the "Download Code" button to save your project as an HTML file.

## Code Structure

### `index.html`
The main structure of the CodEditor including text areas for HTML, CSS, and JavaScript input, an iframe for output, and buttons for hiding/showing code sections and downloading the code.

### `style.css`
Contains the styling for the editor, including the layout, fonts, button styles, and responsiveness. The theme is dark, with clear sections for the input and output areas.

### `script.js`
Handles the functionality of the editor, including:
* Real-time display of the written HTML, CSS, and JS code in the iframe.
* The ability to hide/show each code section.
* Code download functionality that combines the HTML, CSS, and JS into a single file.

## Future Enhancements
* Add support for more programming languages.
* Implement syntax highlighting for the text areas.
* Provide templates for users to start coding with pre-defined code snippets.

## Setup
To use CodEditor locally:
1. Clone or download the repository.
2. Open `index.html` in a web browser to start using the editor.

---

Enjoy coding with CodEditor!
