package com.scarboroughwebsites.scarboroughwebsites.customerrepository;

import com.scarboroughwebsites.scarboroughwebsites.customer.customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface customerrepository extends CrudRepository<customer, String> {
}
