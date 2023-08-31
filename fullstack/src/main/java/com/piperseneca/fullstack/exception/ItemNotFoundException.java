package com.piperseneca.fullstack.exception;

public class ItemNotFoundException extends RuntimeException{
    public ItemNotFoundException(Long id){
        super("The system could not find an item with id " + id);
    }
}
