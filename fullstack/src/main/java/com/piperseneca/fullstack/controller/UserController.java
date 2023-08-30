package com.piperseneca.fullstack.controller;

import com.piperseneca.fullstack.exception.UserNotFoundException;
import com.piperseneca.fullstack.model.User;
import com.piperseneca.fullstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository UserRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return UserRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers(){
        return UserRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return UserRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return UserRepository.findById(id)
            .map(user -> {
                user.setUsername(newUser.getUsername());
                user.setName(newUser.getName());
                user.setEmail(newUser.getEmail());
                return UserRepository.save(user);
            }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!UserRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        UserRepository.deleteById(id);
        return "The user " + id + " has been deleted successfully.";
    }
}
