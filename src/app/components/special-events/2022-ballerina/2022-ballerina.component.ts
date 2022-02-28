import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events-ballerina',
  templateUrl: './2022-ballerina.component.html',
  styleUrls: ['./2022-ballerina.component.css'],
})
export class BallerinaComponent implements OnInit {
  eventTimestamp = 1646919000;
  days = 0;
  hours = 0;
  mins = 0;
  seconds = 0;

  particlesOptions = {
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  async ngOnInit() {
    this.initCountdown();
  }

  initCountdown() {
    const timeDiff = 1646919000 - Date.now() / 1000;
    this.days = Math.floor(timeDiff / 86400);
    this.hours = Math.floor((timeDiff % 86400) / 3600);
    this.mins = Math.floor(((timeDiff % 86400) % 3600) / 60);
    this.seconds = Math.floor(((timeDiff % 86400) % 3600) % 60);
    setTimeout(() => {
      this.initCountdown();
    }, 1000);
  }

  particlesLoaded(container): void {
    console.log(container);
  }

  particlesInit(main): void {
    console.log(main);
  }
}
