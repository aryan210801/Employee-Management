package com.aryan.Backend.controller;

import com.aryan.Backend.model.Employee;
import com.aryan.Backend.service.EmployeeService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/employees")
public class EmployeeManagementController {
    @Autowired
    EmployeeService employeeService;
    private static final Logger logger = LoggerFactory.getLogger(EmployeeManagementController.class);
    @GetMapping("/all-employees")
    public ResponseEntity<List<Employee>>getAllEmployees(){
        logger.info("fetching all employyes list");
        try{
            List<Employee>allEmployees = employeeService.getAllEmployee();
            if(allEmployees.isEmpty()){
                logger.info("there are no employees");
                return ResponseEntity.noContent().build();
            }
            logger.info("successfully retrieved employees {}",allEmployees);
            return ResponseEntity.ok(allEmployees);
        }catch (Exception e) {
            logger.error("Error occurred while fetching employees", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
    @PostMapping("/add-user")
    public ResponseEntity<Employee>addEmployee(@RequestBody Employee employee){
        logger.info("Adding new employee");
        try{
            Employee saveEmployee = employeeService.addEmployee(employee);
            logger.info("added employee {}", saveEmployee);
            return new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);
        }catch(Exception e){
            logger.error("unable to add employee", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<Employee>deleteEmployee(@PathVariable("id") Long id){
        logger.info("deleting user");
        try{

            Employee employee = employeeService.deleteEmployeeById(id);
            return ResponseEntity.ok(employee);

        }catch(Exception e){
            logger.error("Unable to delete user with ID: {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
