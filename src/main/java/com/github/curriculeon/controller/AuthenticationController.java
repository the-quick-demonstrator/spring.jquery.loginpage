package com.github.curriculeon.controller;


import com.github.curriculeon.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/authentication-controller")
@RestController
public class AuthenticationController {
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> credentials) {
        // Authenticate user based on credentials
        final Map<String, String> response = new HashMap<>();
        final String username = credentials.get("username");
        final String password = credentials.get("password");

        // Implement authentication logic (e.g., check against a database)
        // For simplicity, this example assumes a hardcoded username and password
        if ("admin".equals(username) && "pass".equals(password)) {
            response.put("message", "Login successful");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("message", "Invalid credentials");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }
}
