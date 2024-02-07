package com.example.demo.Controller;

import com.example.demo.Model.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("auth")
public class SignUpController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> addUser(@RequestBody User user){
        return new ResponseEntity<User>(userService.addUser(user), HttpStatus.CREATED);
    }
    @PostMapping("signin")
    public Optional<User> getByEmail(@RequestBody User user){
        System.out.println("Email is :-"+user.getEmail());
        return userService.getByEmail(user.getEmail());
    }

}
