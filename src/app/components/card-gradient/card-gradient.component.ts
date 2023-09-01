import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-gradient',
  templateUrl: './card-gradient.component.html',
  styleUrls: ['./card-gradient.component.scss'],
})
export class CardGradientComponent implements OnInit {
  @Input() title = '';
  @Input() icon = '';
  constructor() {}

  ngOnInit(): void {}
}
