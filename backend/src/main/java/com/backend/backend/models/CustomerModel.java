package com.backend.backend.models;

import lombok.Data;

@Data

public class CustomerModel {
    private String id;

    private String password;

    private String email;

    private String phone;
}
