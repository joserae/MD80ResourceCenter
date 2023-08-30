package com.piperseneca.fullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("We couldn't find a user with id " + id);
    }
}
