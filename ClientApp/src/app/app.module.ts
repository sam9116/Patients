import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatDialogModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule  } from '@angular/material';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CreateNewPatientComponent } from './CreateNewPatient/Create.New.Patient.Component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EditDialogComponent } from './EditDialogComponent/EditDialogComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferService } from './TransferService';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateNewPatientComponent,
    FetchDataComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    materialModules,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'CreateNewPatient', component: CreateNewPatientComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'EditPatient', component: EditDialogComponent },
    ])
  ],
  exports: [materialModules],
  providers: [TransferService],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }
