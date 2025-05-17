alert("Welcome to my portfolio\nThis site is not fully completed yet & is still under construction.\n\nThankyou for visiting my Website.");
document.addEventListener("DOMContentLoaded", function() {
    var viewAllBtn = document.getElementById("view-all-projects-btn1");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function() {
            window.location.href = "recentProjects.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var viewAllBtn = document.getElementById("view-all-projects-btn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function() {
            window.location.href = "recentProjects.html";
        });
    }
});
