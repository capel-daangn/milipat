package org.example.be.patent;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Patent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer patentId;

    @Column(length = 200)
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String abstractText;

    @Column
    private String inventor;

    @Column
    private String assignee;

    @Column
    private LocalDateTime publicationData;

    @Column
    private String sourceUrl;
}
