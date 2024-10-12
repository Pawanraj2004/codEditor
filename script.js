// Variables
const htmlTextarea = document.getElementById("html-code");
const cssTextarea = document.getElementById("css-code");
const jsTextarea = document.getElementById("js-code");
const output = document.getElementById("output");

// Event Listeners
document.getElementById("hideshowhtml").addEventListener("click", () => toggleVisibility(htmlTextarea));
document.getElementById("hideshowcss").addEventListener("click", () => toggleVisibility(cssTextarea));
document.getElementById("hideshowjs").addEventListener("click", () => toggleVisibility(jsTextarea));

// Functions
function toggleVisibility(textarea) {
    textarea.style.display = (textarea.style.display === "none") ? "block" : "none";
}

function displayOutput() {
    output.contentDocument.body.innerHTML = `${htmlTextarea.value}<style>${cssTextarea.value}</style>`;
    output.contentWindow.eval(jsTextarea.value);
}

function downloadCode() {
    const htmlCode = htmlTextarea.value;
    const cssCode = cssTextarea.value;
    const jsCode = jsTextarea.value;

    let codeName = prompt("Enter file name:");
    while (!codeName) {
        codeName = prompt("Please enter a valid file name:");
    }

    const combinedCode = `
        <html>
            <head>
                <title>${codeName}</title>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
        </html>`;

    const blob = new Blob([combinedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${codeName}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
