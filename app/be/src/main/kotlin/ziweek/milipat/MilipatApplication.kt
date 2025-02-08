package ziweek.milipat

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
class MilipatApplication

fun main(args: Array<String>) {
    runApplication<MilipatApplication>(*args)
}
