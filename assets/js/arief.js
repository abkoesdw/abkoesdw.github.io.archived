// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "one";
    // if (mySidebar.style.display === 'none') {
    //   mySidebar.style.display = 'block';
    //   overlayBg.style.display = "block";
    // } else {
    //   mySidebar.style.display = 'none';
    //   overlayBg.style.display = "none";
    // }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}