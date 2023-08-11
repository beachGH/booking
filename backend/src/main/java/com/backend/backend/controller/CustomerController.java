package com.backend.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.entities.CustomerEntities;
import com.backend.backend.models.CustomerModel;
import com.backend.backend.service.CustomerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor

public class CustomerController {
    private final CustomerService customerService;
    
    @GetMapping()
    public List<CustomerEntities> getAllCustomer() {
        List<CustomerEntities> data = customerService.getAllCustomer();

        return data;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CustomerModel> getCustomerById(@PathVariable("id") String id) {
        CustomerModel data = customerService.getCustomerById(id);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<CustomerModel> createCustomer(@RequestBody CustomerModel customerModel) {
        CustomerModel data = customerService.createCustomer(customerModel);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CustomerModel> updateCustomerById(@PathVariable("id") String id, @RequestBody CustomerModel customerModel) {
        CustomerModel data = customerService.updateCustomerById(id, customerModel);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    
}
