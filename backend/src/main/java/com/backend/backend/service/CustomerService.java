package com.backend.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.backend.entities.CustomerEntities;
import com.backend.backend.models.CustomerModel;

@Service

public interface CustomerService {
    public List<CustomerEntities> getAllCustomer();
    public CustomerModel getCustomerById(String id);

    public CustomerModel createCustomer(CustomerModel customerModel);

    public CustomerModel updateCustomerById(String id, CustomerModel customerModel);

    public void deleteCustomerById(String id);
}
