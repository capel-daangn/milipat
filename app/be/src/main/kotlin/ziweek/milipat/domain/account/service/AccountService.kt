package ziweek.milipat.domain.account.service

import org.springframework.stereotype.Service
import ziweek.milipat.domain.account.dto.CreateMyAccountReqDto
import ziweek.milipat.domain.account.dto.UpdateAccountReqDto
import ziweek.milipat.domain.account.entity.Account
import ziweek.milipat.domain.account.exception.EmailDuplicationException
import ziweek.milipat.domain.account.repository.AccountRepository

@Service
class AccountService(
    private val accountRepository: AccountRepository
) {

    fun createAccount(createMyAccountReqDto: CreateMyAccountReqDto): Account {
        if (getAccountByEmail(createMyAccountReqDto.email) != null) {
            throw EmailDuplicationException()
        }
        return accountRepository.save(createMyAccountReqDto.toEntity())
    }

    fun getAccountById(id: String): Account? {
        return accountRepository.findAccountById(id)
    }

    fun getAccountByEmail(email: String): Account? {
        return accountRepository.findAccountByEmail(email)
    }

    fun updateAccount(updateAccountReqDto: UpdateAccountReqDto): Account {
        return accountRepository.save(updateAccountReqDto.toEntity())
    }

    fun deleteAccount(id: String) {
        return accountRepository.deleteById(id)
    }
}