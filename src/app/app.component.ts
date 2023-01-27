import { Component } from '@angular/core';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-forecast-web';
  climas: any = [];

  constructor(private climaService: ClimaService) {
    this.listarClimas();
  }

  listarClimas() {
    this.climaService.listarClimas().subscribe(data => {
      this.climas = data;
    });
  }
}
