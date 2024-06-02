package org.example.be.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public Integer create(CreateMemberDTO createMemberDTO) {
        Member member = Member.builder().memberId(createMemberDTO.getMemberId()).email(createMemberDTO.getEmail()).build();
//        Member member = new Member();
//        member.setMemberId(createMemberDTO.getMemberId());
//        member.setEmail(createMemberDTO.getEmail());
        this.memberRepository.save(member);
        return member.getMemberId();
    }

    public List<Member> getMemberAll() {
        List<Member> memberList = this.memberRepository.findAll();
        return memberList;
    }

    public void deleteMember(id) {
        this.memberRepository.delete();
    }
}
