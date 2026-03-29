package com.littlelemon.backend.api.booking;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByBookingDate(LocalDate bookingDate);
    long countByBookingDateAndBookingTimeAndStatus(LocalDate bookingDate, String bookingTime, String status);
}
