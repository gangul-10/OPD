import { Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';



export const routes: Routes = [

{ path: 'login', component: LoginComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'doctors', component: DoctorListComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'appointments', component: AppointmentListComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


