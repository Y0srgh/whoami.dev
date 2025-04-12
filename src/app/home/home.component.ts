import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgParticlesModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  particlesOptions = {
    particles: {
      number: { value: 80 },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      }
    }
  };

  techStack = [
    {
      name: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Terraform', icon: 'fas fa-cloud-upload-alt' }
      ]
    }, 
    {
      name: 'DevOps & Automation',
      items: [
        { name: 'Jenkins', icon: 'fab fa-jenkins' },
        { name: 'GitLab CI', icon: 'fab fa-gitlab' },
        { name: 'Ansible', icon: 'fas fa-cogs' },
        { name: 'Prometheus', icon: 'fas fa-chart-line' }
      ]
    },
    {
      name: 'Development',
      items: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'Go', icon: 'fas fa-code' }
      ]
    }
  ];

  ngOnInit() {
    setTimeout(() => this.initializeProgressBars(), 100);
  }

  private initializeProgressBars() {
    const progressBars = document.querySelectorAll<HTMLElement>('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      if (value) {
        const progress = bar.querySelector('.progress') as HTMLElement;
        progress.style.setProperty('--progress-width', `${value}%`);
      }
    });
  }
}