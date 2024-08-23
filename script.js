if (!sessionStorage.getItem("reloaded")) {
    // Set the reload flag
    sessionStorage.setItem("reloaded", true);
    setTimeout(function() {
      location.reload();
    }, 500); // auto reload time
  }

window.addEventListener('DOMContentLoaded', function() {
    // Set a timeout to hide the preloader after 3 seconds
    var mainContent = document.getElementById('content');
    setTimeout(function() {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.visibility = 'visible';
      mainContent.classList.add('fade-in');
    }, 3000); // 3000 milliseconds = 3 seconds
  });
