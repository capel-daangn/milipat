package org.example.be;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/")
    public static String home() {
        return "ok";
    }
}
