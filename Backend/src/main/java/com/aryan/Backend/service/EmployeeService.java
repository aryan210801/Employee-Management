package com.aryan.Backend.service;

import com.aryan.Backend.model.Employee;
import com.aryan.Backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
    public List<Employee>getAllEmployee(){
        return employeeRepository.findAll();
    }
    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee deleteEmployeeById(Long id) {
        Optional<Employee>employee = employeeRepository.findById(id);
        if(employee.isPresent()) {
            employeeRepository.deleteById(id);
            return employee.get();
        }else {
            throw new RuntimeException("Employee not found");
        }
    }
}
