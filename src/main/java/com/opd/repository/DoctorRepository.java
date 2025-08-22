package com.opd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.opd.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {}
