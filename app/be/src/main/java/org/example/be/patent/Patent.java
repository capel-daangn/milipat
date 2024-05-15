package org.example.be.patent;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Patent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer patentId;

    @Column(length = 200)
    private String subject;

//    @Column(columnDefinition = "TEXT")
//    private String abstractText;
//
//    @Column
//    private String inventor;
//
//    @Column
//    private String assignee;
//
//    @Column
//    private LocalDateTime publicationData;
//
//    @Column
//    private String sourceUrl;
}
