package com.scarboroughwebsites.scarboroughwebsites.employeerepository;

import com.scarboroughwebsites.scarboroughwebsites.employee.employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
public interface employeerepository extends CrudRepository<employee, String> {


}
