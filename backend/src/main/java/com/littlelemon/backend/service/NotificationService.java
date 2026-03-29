package com.littlelemon.backend.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    private final JavaMailSender javaMailSender;

    public NotificationService(JavaMailSender mailSender) {
        this.javaMailSender = mailSender;
    }
    @Async
    public void sendConfirmation(String toEmail, String name, String date, String time) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("Little Lemon - Reservation Confirmed!");
            message.setText("Hi " + name + ", \n\nYour table is confirmed for " + date + " at " + time + ".\nSee you then!");
            javaMailSender.send(message);
            System.out.println("Email sent successfully to: " + toEmail);
        } catch (Exception e) {
            System.err.println("COULD NOT SEND EMAIL: " + e.getMessage());
            System.err.println("Note: The booking was still saved in the database");
        }
    }
}
