import { Component, Inject, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../Patient';
import { Routes, Router } from '@angular/router';



@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent{




  public patients: Patient[];

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject('BASE_URL') baseUrl: string)
    {
      http.get<Patient[]>(baseUrl + 'api/PatientData/GetPatientsAsync').subscribe(result => {
        this.patients = result;
      }, error => console.error(error));
    

    }

 
  edit(patienttobeedited: Patient) {
   
    this.router.navigate(['/EditPatient'], {
      queryParams: {
        'patient': JSON.stringify(patienttobeedited)
      }
    });
}
 

  delete(patient)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    this.http.delete<Patient>('api/PatientData/DeletePatientsAsync?Id=' + patient.id, httpOptions).subscribe();
    this.patients.splice(this.patients.indexOf(patient), 1);
  }


}
