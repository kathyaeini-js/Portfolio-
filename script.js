document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      toggleBtn.textContent = "🌙"; // show moon (click = go dark)
    } else {
      document.body.classList.remove("light-theme");
      toggleBtn.textContent = "☀️"; // show sun (click = go light)
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-theme")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
});
