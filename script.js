alert("weclome to the world of javascript");
function hexToRgb(hex) {
    // Remove the '#' if present
    hex = hex.replace(/^#/, '');

    // Parse the hex string into RGB components
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255; // Extract red
    const g = (bigint >> 8) & 255;  // Extract green
    const b = bigint & 255;         // Extract blue

    return `rgb(${r}, ${g}, ${b})`;
}

// Example usage
const hexColor = "#FF5733";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Output: rgb(255, 87, 51)
