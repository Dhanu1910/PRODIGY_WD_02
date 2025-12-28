// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadProjects();
  setupButtons();
});

/* ------------------------------
   PROJECT DATA (Dynamic Rendering)
---------------------------------*/
const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio built using HTML, CSS, and JavaScript."
  },
  {
    title: "Landing Page",
    description: "Clean and modern landing page UI with responsive layout."
  },
  {
    title: "Dev Showcase",
    description: "Developer showcase website for internship submissions."
  }
];

/* ------------------------------
   LOAD PROJECTS INTO DOM
---------------------------------*/
function loadProjects() {
  const projectSection = document.querySelector(".projects");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="view-btn">View Project</button>
    `;

    projectSection.appendChild(card);
  });
}

/* ------------------------------
   BUTTON EVENT HANDLING
---------------------------------*/
function setupButtons() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-btn")) {
      showProjectMessage();
    }
  });
}

function showProjectMessage() {
  alert("Project demo will be added soon.");
}

/* ------------------------------
   THEME LOGIC (Basic but Professional)
---------------------------------*/
function initTheme() {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.style.backgroundColor = "#0f172a";
    document.body.style.color = "#e5e7eb";
  }
}
