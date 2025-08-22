package com.opd.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.opd.repository.PatientRepository;
import com.opd.model.Patient;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

    @Autowired
    private PatientRepository patientRepo;

    @GetMapping
    public List<Patient> getPatients() {
        return patientRepo.findAll();
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient p) {
        return patientRepo.save(p);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        Patient patient = patientRepo.findById(id).orElseThrow();
        patient.setName(updatedPatient.getName());
        patient.setAge(updatedPatient.getAge());
        patient.setDescription(updatedPatient.getDescription());
        return patientRepo.save(patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id) {
        patientRepo.deleteById(id);
    }
}

