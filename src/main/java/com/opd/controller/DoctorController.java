package com.opd.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.opd.repository.DoctorRepository;
import com.opd.model.Doctor;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepo;

    @GetMapping
    public List<Doctor> getDoctors() {
        return doctorRepo.findAll();
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor d) {
        return doctorRepo.save(d);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor updatedDoctor) {
        Doctor doctor = doctorRepo.findById(id).orElseThrow();
        doctor.setName(updatedDoctor.getName());
        doctor.setSpecialization(updatedDoctor.getSpecialization());
        return doctorRepo.save(doctor);
    }

    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id) {
        doctorRepo.deleteById(id);
    }
}
