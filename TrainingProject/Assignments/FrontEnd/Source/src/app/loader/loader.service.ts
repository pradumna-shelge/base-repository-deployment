import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
flag = false;
  constructor() { }
  setFlags(flag: boolean) {

    this.flag = flag;
  }
}
