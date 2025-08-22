package com.opd.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.opd.repository.*;
import com.opd.dto.AppointmentRequest;
import com.opd.model.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    @Autowired private AppointmentRepository appointmentRepo;
    @Autowired private DoctorRepository doctorRepo;
    @Autowired private PatientRepository patientRepo;

    @GetMapping
    public List<Appointment> getAppointments() {
        return appointmentRepo.findAll();
    }
    @PostMapping
    public Appointment addAppointment(@RequestBody AppointmentRequest request) {
        Appointment a = new Appointment();
        a.setDoctor(doctorRepo.findById(request.getDoctorId()).orElseThrow());
        a.setPatient(patientRepo.findById(request.getPatientId()).orElseThrow());
        a.setDate(LocalDate.parse(request.getDate()));
        
        return appointmentRepo.save(a);
    }

    @PutMapping("/{id}")
    public Appointment updateAppointment(@PathVariable Long id, @RequestBody AppointmentRequest req) {
        Appointment a = appointmentRepo.findById(id).orElseThrow();
        a.setDoctor(doctorRepo.findById(req.getDoctorId()).orElseThrow());
        a.setPatient(patientRepo.findById(req.getPatientId()).orElseThrow());
        a.setDate(LocalDate.parse(req.getDate()));
        
        return appointmentRepo.save(a);
    }
    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepo.deleteById(id);
    }
}
