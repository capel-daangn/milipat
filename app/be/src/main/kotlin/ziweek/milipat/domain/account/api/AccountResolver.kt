package ziweek.milipat.domain.account.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.milipat.domain.account.dto.AccountResDto
import ziweek.milipat.domain.account.dto.CreateMyAccountReqDto
import ziweek.milipat.domain.account.dto.UpdateAccountReqDto
import ziweek.milipat.domain.account.service.AccountService

@Controller
class AccountResolver(
    private val accountService: AccountService
) {

    @MutationMapping
    fun createAccount(
        @Argument(name = "createAccountInput") createMyAccountReqDto: CreateMyAccountReqDto
    ): AccountResDto {
        return accountService.createAccount(createMyAccountReqDto).toResDto()
    }

    @QueryMapping
    fun getAccountById(
        @Argument id: String
    ): AccountResDto {
        return accountService.getAccountByEmail(id)!!.toResDto()
    }

    @QueryMapping
    fun getAccountByEmail(
        @Argument email: String
    ): AccountResDto {
        return accountService.getAccountByEmail(email)!!.toResDto()
    }

    @MutationMapping
    fun updateAccount(
        @Argument(name = "updateAccountInput") updateAccountReqDto: UpdateAccountReqDto
    ): AccountResDto {
        return accountService.updateAccount(updateAccountReqDto).toResDto()
    }

    @MutationMapping
    fun deleteAccount(
        @Argument id: String
    ) {
        accountService.deleteAccount(id)
    }
}