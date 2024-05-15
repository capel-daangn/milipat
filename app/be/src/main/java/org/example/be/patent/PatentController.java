package org.example.be.patent;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/patent")
@RequiredArgsConstructor
@RestController
@Tag(name = "Patent")
public class PatentController {
    private PatentService patentService;

    @GetMapping("/")
    public String home() {
        return "patent home";
    }
}
