import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrl: './transaction-graph.component.css'
})
export class TransactionGraphComponent {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      
      data: { 
        labels: ['10 dec', '11 dec', '12 dec', '13 dec', '14 dec', '15 dec', '16 dec'], 
        datasets: [
          {
            label: "Spent",
            data: ['467', '576', '572', '79', '92', '574', '573'],
            tension: 0.4,
            backgroundColor: 'red',
            pointRadius: 4,
            pointBackgroundColor: 'red',
            fill: false
          },
          {
            label: "Received",
            data: ['542', '542', '536', '327', '17', '0.00', '538'],
            pointRadius: 4,
            pointBackgroundColor: 'green',
            backgroundColor: 'green',
            fill: false
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            position: 'top',
            align: 'end', 
          }
        }
      }
    });
  }
  
}
