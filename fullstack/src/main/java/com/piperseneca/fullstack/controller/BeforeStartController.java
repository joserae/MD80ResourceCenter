package com.piperseneca.fullstack.controller;

import com.piperseneca.fullstack.exception.ItemNotFoundException;
import com.piperseneca.fullstack.model.BeforeStart;
import com.piperseneca.fullstack.repository.BeforeStartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BeforeStartController {
    @Autowired
    private BeforeStartRepository beforeStartRepository;

    @PostMapping("/beforeStart")
    BeforeStart newBeforeStart(@RequestBody BeforeStart newBeforeStart){
        return beforeStartRepository.save(newBeforeStart);
    }

    @GetMapping("/beforeStartItems")
    List<BeforeStart> getAllBeforeStartItems(){
        return beforeStartRepository.findAll();
    }

    @GetMapping("/beforeStart/{id}")
    BeforeStart getItemById(@PathVariable Long id){
        return beforeStartRepository.findById(id)
                .orElseThrow(()->new ItemNotFoundException(id));
    }
    @PutMapping("beforeStart/{id}")
    BeforeStart updateItem(@RequestBody BeforeStart newBeforeStart, @PathVariable Long id){
        return beforeStartRepository.findById(id)
                .map(item ->{
                    item.setItem(newBeforeStart.getItem());
                    item.setState(newBeforeStart.getState());
                    return beforeStartRepository.save(item);
                }).orElseThrow(()->new ItemNotFoundException(id));
    }

    @DeleteMapping("/beforeStart/{id}")
    String deleteItem(@PathVariable Long id){
        if (!beforeStartRepository.existsById(id)){
            throw new ItemNotFoundException(id);
        }
        beforeStartRepository.deleteById(id);
        return "The item with id " + id + " has been successfully deleted.";
    }
}
