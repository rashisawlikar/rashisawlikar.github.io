document.addEventListener('DOMContentLoaded', () => {
    fetch('data/cv.json')
        .then(response => response.json())
        .then(data => {
            const cvDiv = document.getElementById('cv');
            cvDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.title}</p>
                <h3>Contact</h3>
                <p>Email: ${data.contact.email}</p>
                <p>Phone: ${data.contact.phone}</p>
                <h3>Education</h3>
                <ul>
                    ${data.education.map(edu => `<li>${edu.degree} from ${edu.institution} (${edu.year})</li>`).join('')}
                </ul>
                <h3>Experience</h3>
                <ul>
                    ${data.experience.map(exp => `<li>${exp.position} at ${exp.company} (${exp.years}): ${exp.description}</li>`).join('')}
                </ul>
                <h3>Skills</h3>
                <ul>
                    ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            `;
        });
});