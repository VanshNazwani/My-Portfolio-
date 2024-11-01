// Load project data from JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById('project-list');
    data.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.setAttribute('data-aos', 'fade-up');
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectList.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error loading project data:', error));

  