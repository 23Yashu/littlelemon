package com.littlelemon.backend.api.user;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String firstName;

    private String lastName;

    @Column(unique = true)
    @Valid
    private String phoneNumber;

    @Column(unique = true)
    @Valid
    @Email
    private String email;

    private String password;

    private String specialRequest;

    private int points = 0;
}
