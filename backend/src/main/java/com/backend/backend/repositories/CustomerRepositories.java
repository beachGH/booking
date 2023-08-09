package com.backend.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.entities.CustomerEntities;

@Repository

public interface CustomerRepositories extends JpaRepository<CustomerEntities, String> {
    
}
