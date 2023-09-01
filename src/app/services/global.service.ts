import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  pageName!: string;
  constructor() {}

  getPageName(): string {
    return this.pageName;
  }

  setPageName(name: string) {
    this.pageName = name;
  }
}
