package com.littlelemon.backend.api.payment;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PaymentRequest(
        @NotNull Long bookingId,
        @NotBlank String cardNumber,
        @NotBlank String cardHolderName,
        @NotBlank String expiryDate,
        @NotBlank String cvv,
        @NotBlank String bookingConfirmation
) {}
