package org.example.be.member;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberId;

    @Column
    private String email;

//    @Column
//    private String password;
//
//    @Column
//    private String name;
//
//    @Column
//    private LocalDateTime createDate;
}
