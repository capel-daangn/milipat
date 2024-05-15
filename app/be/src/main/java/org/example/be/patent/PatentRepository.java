package org.example.be.patent;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatentRepository extends JpaRepository<Patent, Integer> {
}
