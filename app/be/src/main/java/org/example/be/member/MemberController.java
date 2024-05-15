package org.example.be.member;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/member")
@RequiredArgsConstructor
@RestController
@Tag(name = "Member")
public class MemberController {
    private MemberService userService;

    @GetMapping("/")
    public String home() {
        return "member home";
    }
}
