package com.opd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.opd.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {}
