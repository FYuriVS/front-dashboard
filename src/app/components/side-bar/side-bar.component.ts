import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  name!: string;

  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.name = this.globalService.getPageName();

    console.log(this.name);
  }
}
