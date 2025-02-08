package ziweek.milipat.domain.order.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.milipat.domain.order.dto.CreateOrderReqDto
import ziweek.milipat.domain.order.dto.OrderResDto
import ziweek.milipat.domain.order.dto.UpdateOrderReqDto
import ziweek.milipat.domain.order.service.OrderService

@Controller
class OrderResolver(
    private val orderService: OrderService
) {

    @QueryMapping
    fun getOrderById(
        @Argument id: Long
    ): OrderResDto {
        return orderService.getOrderById(id).toResDto()
    }

    @MutationMapping
    fun createOrder(
        @Argument(name = "createOrderInput") createDocumentReqDto: CreateOrderReqDto
    ): OrderResDto {
        return orderService.createOrder(createDocumentReqDto).toResDto()
    }

    @MutationMapping
    fun updateOrder(
        @Argument(name = "updateOrderInput") updateDocumentReqDto: UpdateOrderReqDto
    ): OrderResDto {
        return orderService.updateOrder(updateDocumentReqDto).toResDto()
    }

    @MutationMapping
    fun deleteOrderById(
        @Argument id: Long
    ) {
        return orderService.deleteOrderById(id)
    }
}