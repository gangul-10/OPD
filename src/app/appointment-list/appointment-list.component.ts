import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointments: any[] = [];
  base = 'http://localhost:8080/api/appointments';

  showAppointmentsList:boolean=false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.load();

  }

  toggleAppointmentsList(){
    this.showAppointmentsList=!this.showAppointmentsList;
  }

  load() {
    this.http.get<any[]>(this.base).subscribe(data =>
      {console.log(data) ;
        this.appointments = data});

  }

  add(doctorId: number, patientId: number, date: string) {
    this.http.post(this.base, { doctorId, patientId, date }).subscribe(() => this.load());
  }

  update(id: number, doctorId: number, patientId: number, date: string) {
    this.http.put(`${this.base}/${id}`, { doctorId, patientId, date }).subscribe(() => this.load());
  }

  delete(id: number) {
    this.http.delete(`${this.base}/${id}`).subscribe(() => this.load());
  }
}
