package ziweek.milipat.domain.account.entity

import jakarta.validation.constraints.Email
import org.springframework.data.mongodb.core.mapping.Document
import ziweek.milipat.domain.account.dto.AccountResDto

@Document
data class Account(
    var id: String? = null,

    @Email(
        message = "This is not valid email",
        regexp = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"
    )
    val email: String,
    val name: String,
    val encodedPassword: String,
) {
    fun toResDto(): AccountResDto {
        return AccountResDto(
            id = this.id,
            name = this.name,
            email = this.email
        )
    }
}