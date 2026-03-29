package com.littlelemon.backend.controller;

import com.littlelemon.backend.api.booking.BookingRepository;
import com.littlelemon.backend.api.payment.PaymentRequest;
import com.littlelemon.backend.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    private final BookingRepository bookingRepository;

    private NotificationService notificationService;

    public PaymentController(BookingRepository bookingRepository, NotificationService notificationService) {
        this.bookingRepository = bookingRepository;
        this.notificationService = notificationService;
    }

    @PostMapping("/confirm")
    public ResponseEntity<String> confirm(@RequestBody PaymentRequest request) {
        System.out.println("Received payment request:" + request);
        if (request.bookingId() == null) {
            return ResponseEntity.badRequest().body("Error: Booking ID is missing from the request.");
        }
        var booking = bookingRepository.findById(request.bookingId())
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus("CONFIRMED");
        booking.setConfirmationMethod(request.bookingConfirmation());
        bookingRepository.save(booking);
        notificationService.sendConfirmation(booking.getEmail(), booking.getName(),
                booking.getBookingDate().toString(), booking.getBookingTime());
        return ResponseEntity.ok("Booking fully confirmed!");
    }
}
