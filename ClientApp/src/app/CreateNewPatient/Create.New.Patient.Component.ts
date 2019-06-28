import { Component} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Patient } from '../Patient';



class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

@Component({
  selector: 'app-create-new-component-form',
  templateUrl: './Create.New.Patient.Component.html'
})



export class CreateNewPatientComponent
{
  url = 'api/PatientData/UpsertPatientsAsync';
  constructor(private http: HttpClient) { }

  model = new Patient(Guid.newGuid(), 'First Name', 'Last Name', '');
  submitted = false;

  onSubmit() {
    const header = new HttpHeaders()
      .set('Content-type', 'application/json').set('Charset', 'utf-8');

    const body = JSON.stringify(this.model);
    this.http.post<Patient>(this.url, body , { headers: header }).subscribe(data => console.log(data));
    this.submitted = true;
  }

}



