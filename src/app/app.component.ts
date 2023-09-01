import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gerenciamentoDeClientes';

  loginPage!: boolean;

  constructor(public globalService: GlobalService, private router: Router) {}

  ngOnInit(): void {
    this.isLogin();
  }

  isLogin() {
    const token = localStorage.getItem('token');
    if (!token || token === undefined || token === '') {
      this.router.navigate(['login']);
      this.loginPage = true;
    } else this.loginPage = false;
  }
}
