import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from './Patient';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class TransferService {

  public newPatient = new Subject<Patient>();
  private data: Patient;

  setData(data) {
    this.newPatient.next(data);
    this.data = data;

  }

  getData() {
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

}
