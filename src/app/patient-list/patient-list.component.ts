import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  patient = { id: null, name: '', age: null ,description:''};
  apiUrl = 'http://localhost:8080/api/patients';

  showPatientsList:boolean=false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPatients();
  }
  toToggle(){
    this.showPatientsList=!this.showPatientsList;
  }
  getPatients() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      console.log("Patients loaded:", data);
      this.patients = data;
    });
  }

  addPatient() {
    this.http.post<any>(this.apiUrl, this.patient).subscribe(() => {
      this.getPatients();
      this.patient = { id: null, name: '', age: null,description:'' };
    });
  }

  editPatient(p: any) {
    this.patient = { ...p };
  }

  updatePatient() {
    this.http.put<any>(`${this.apiUrl}/${this.patient.id}`, this.patient).subscribe(() => {
      this.getPatients();
      this.patient = { id: null, name: '', age: null ,description:''};
    });
  }

  deletePatient(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.getPatients());
  }
}
