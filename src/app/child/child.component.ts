import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  realMadridOdLegendList: string[] = [
    'Juanito',
    'Sanchis',
    'Di Stefano',
    'Buitragueño',
    'Hugo Sanchez',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
