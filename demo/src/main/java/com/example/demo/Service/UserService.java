package com.example.demo.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
private UserRepo userRepo;
@Autowired
private PasswordEncoder passwordEncoder;
@Autowired
private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> getAllUser(){
        return userRepo.findAll();
    }
    public User getUserById(long id){
        return userRepo.getReferenceById(id);
    }
    public User addUser(User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
    public Optional<User> getByEmail(String email){
        return userRepo.findByEmail(email);
    }
}
