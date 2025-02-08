package ziweek.milipat.domain.account.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository
import ziweek.milipat.domain.account.entity.Account

@Repository
interface AccountRepository : MongoRepository<Account, String> {

    fun findAccountById(id: String): Account

    fun findAccountByEmail(email: String): Account
}