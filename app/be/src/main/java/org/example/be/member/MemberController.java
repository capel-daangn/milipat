package org.example.be.member;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/member")
@RequiredArgsConstructor
@RestController
@Tag(name = "Member")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/")
    public String home() {
        return "member home";
    }

    @PostMapping("/create")
    public Integer createMember(CreateMemberDTO createMemberDTO) {
        return this.memberService.create(createMemberDTO);
    }

    @GetMapping("/read/all")
    public List<Member> getMemberAll() {
        return  this.memberService.getMemberAll();
    }

    @GetMapping("/delete/{id}")
    public String deleteMember(@PathVariable("id") Integer id) {
        this.memberService
    }
}
