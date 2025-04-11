import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'EASY – Facility Reservation System',
      description: 'A MERN-based web app for university facility reservations with calendar integration, user roles, and event support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'TailwindCSS'],
      link: 'https://yourprojectlink.com'
    },
    {
      title: 'CI/CD DevSecOps Pipeline',
      description: 'A full pipeline setup using GitHub Actions, Docker, SonarQube, Trivy, and OWASP for a MERN stack app.',
      tech: ['GitHub Actions', 'Docker', 'Trivy', 'SonarQube'],
      link: 'https://github.com/yourrepo'
    },
    {
      title: 'AdminiOrga',
      description: 'Admin dashboard built with MERN stack to manage users, resources, and roles securely and efficiently.',
      tech: ['MERN', 'Tailwind', 'JWT', 'React Hooks'],
      link: 'https://youradminiorga.com'
    }
  ];
}
