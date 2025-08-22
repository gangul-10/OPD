package com.opd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.opd.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}
