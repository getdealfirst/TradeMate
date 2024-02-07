package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newuser")
public class NewUserController {
    @GetMapping("/hello")
    public String hello(){
        return "This is Hello for you";
    }
    @GetMapping("/welcome")
    public String welcome(){
        return "This is Welcome for you";
    }
}
