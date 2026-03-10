function startPreloader() {
    window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      const content = document.getElementById("content");
  
      if (preloader) {
        preloader.style.display = "none";
      }
  
      if (content) {
        content.style.display = "block";
      }
    });
  }
  
  startPreloader();
  
  module.exports = startPreloader;