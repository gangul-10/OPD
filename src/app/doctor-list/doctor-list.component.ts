import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [HttpClientModule, NgFor,NgIf],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  doctors: any[] = [];
  base = 'http://localhost:8080/api/doctors';

  showDoctorsList:boolean=false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  toggleDoc(){
    this.showDoctorsList=!this.showDoctorsList;
  }

  load() {
    this.http.get<any[]>(this.base).subscribe(data => this.doctors = data);
  }

  add(name: string, specialization: string) {
    this.http.post(this.base, { name, specialization }).subscribe(() => this.load());
  }

  update(id: number, name: string, specialization: string) {
    this.http.put(`${this.base}/${id}`, { name, specialization }).subscribe(() => this.load());
  }

  delete(id: number) {
    this.http.delete(`${this.base}/${id}`).subscribe(() => this.load());
  }
}
