function toggle() {
    var sidebar = document.getElementById("sidebar");
    var x = document.getElementById("video-container");
    var y = document.querySelectorAll("user-video");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        x.style.marginLeft = "0";
    } else {
        sidebar.style.display = "none";
        x.style.marginLeft = "10px";
        x.style.width = "100%";
        y.style.width = "404px";
    }
}