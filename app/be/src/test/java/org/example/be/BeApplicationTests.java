package org.example.be;

import org.example.be.member.CreateMemberDTO;
import org.example.be.member.Member;
import org.example.be.member.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class BeApplicationTests {

    @Autowired
    private MemberService memberService;

    @Test
    void contextLoads() {
        Member member = Member.builder().memberId(1).email("test").build();
        List<Member> memberList = this.memberService.getMemberAll();
        Assertions.assertEquals(memberList.get(0).getMemberId(), 1);
    }
}
