package org.example.be.member;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class CreateMemberDTO {
    private Integer memberId;
    private String email;
}
