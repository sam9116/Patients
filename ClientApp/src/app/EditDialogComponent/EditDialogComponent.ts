
import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from "../Patient";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edit-dialog',
  templateUrl: './EditDialogComponent.html',
  styleUrls: ['./Editdialog.component.css']
})
export class EditDialogComponent implements OnInit {
   

  Id: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;

  patient: any;
  patientinterface: iPatient;
  url = 'api/PatientData/UpsertPatientsAsync';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(t => {
        let jsonObj: any = JSON.parse(t['patient']);

        this.Id = jsonObj.id;
        this.FirstName = jsonObj.firstName;
        this.LastName = jsonObj.lastName;
        this.DateOfBirth = jsonObj.dateOfBirth;
        console.log(t['patient']);
      });
  }
 



  save() {
    const header = new HttpHeaders()
      .set('Content-type', 'application/json').set('Charset', 'utf-8');


    this.http.post(this.url, { 'Id': this.Id, 'FirstName': this.FirstName, 'LastName': this.LastName, 'DateOfBirth': this.DateOfBirth }, { headers: header }).subscribe(data => console.log(data));

    this.router.navigate(['/fetch-data']);
  }

  close() {

    this.router.navigate(['/fetch-data']);
  }

}

export  interface iPatient {
  Id: String;
  FirstName: String;
  LastName: String;
  DateOfBirth: String;
}
