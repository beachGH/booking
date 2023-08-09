package com.backend.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.backend.backend.entities.CustomerEntities;
import com.backend.backend.models.CustomerModel;
import com.backend.backend.repositories.CustomerRepositories;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class CustomerServiceImp implements CustomerService {
    private final CustomerRepositories customerRepositories;

    @Override
    public List<CustomerEntities> getAllCustomer() {
        List<CustomerEntities> data = customerRepositories.findAll();

        return data;
    }

    @Override
    public CustomerModel getCustomerById(String id) {
        Optional<CustomerEntities> data = customerRepositories.findById(id);
        CustomerModel customerModel = new CustomerModel();
        customerModel.setId(data.get().getId());
        customerModel.setPassword(data.get().getPassword());
        customerModel.setEmail(data.get().getEmail());
        customerModel.setPhone(data.get().getPhone());

        return customerModel;
    }

    @Override
    public CustomerModel createCustomer(CustomerModel customerModel) {
        CustomerEntities customerEntities = new CustomerEntities();
        customerEntities.setEmail(customerModel.getEmail());
        customerEntities.setPassword(customerModel.getPassword());
        customerEntities.setPhone(customerModel.getPhone());
        
        CustomerEntities data = customerRepositories.save(customerEntities);
        customerEntities.setId(data.getId());
        
        return customerModel;
    }

    @Override
    public CustomerModel updateCustomerById(String id, CustomerModel customerModel) {
        Optional<CustomerEntities> data = customerRepositories.findById(id);

        data.get().setPassword(customerModel.getPassword());
        data.get().setEmail(customerModel.getEmail());
        data.get().setPhone(customerModel.getPhone());

        CustomerEntities dataCustomer = customerRepositories.save(data.get());
        customerModel.setId(dataCustomer.getId());
        customerModel.setPassword(dataCustomer.getPassword());
        customerModel.setEmail(dataCustomer.getEmail());
        customerModel.setPhone(dataCustomer.getPhone());

        return customerModel;
    }

    @Override
    public void deleteCustomerById(String id) {
        customerRepositories.deleteById(id);
    }
    
}
