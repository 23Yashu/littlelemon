package com.littlelemon.backend.controller;

import com.littlelemon.backend.api.AvailabilityResponse;
import com.littlelemon.backend.api.booking.Booking;
import com.littlelemon.backend.api.booking.BookingRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingRepository repository;

    public BookingController(BookingRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return repository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    @GetMapping("/availability")
    public List<AvailabilityResponse> checkAvailability(@RequestParam (name = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate bookingDate) {
        List<String> allSlots = List.of("17:00", "18:00", "19:00", "20:00", "21:00", "22:00");
        int MAX_TABLES = 10;
        return allSlots.stream().map(slot -> {
            long count = repository.countByBookingDateAndBookingTimeAndStatus(bookingDate, slot, "CONFIRMED");
            return new AvailabilityResponse(slot, count < MAX_TABLES);
        }).toList();
    }
}
