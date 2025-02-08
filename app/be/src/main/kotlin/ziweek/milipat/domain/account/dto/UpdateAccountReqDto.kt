package ziweek.milipat.domain.account.dto

import ziweek.milipat.domain.account.entity.Account

class UpdateAccountReqDto(
    val id: String,
    val name: String,
    val email: String,
    val encodedPassword: String
) {
    fun toEntity(): Account {
        return Account(
            id = id,
            name = this.name,
            email = this.email,
            encodedPassword = this.encodedPassword,
        )
    }
}