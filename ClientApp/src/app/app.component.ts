import { Component } from '@angular/core';
import { Patient } from './Patient';
import { MatDialogConfig } from '@angular/material';
import { EditDialogComponent } from './EditDialogComponent/EditDialogComponent';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
}
