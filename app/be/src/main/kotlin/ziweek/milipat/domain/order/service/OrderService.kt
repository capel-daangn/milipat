package ziweek.milipat.domain.order.service

import org.springframework.stereotype.Service
import ziweek.milipat.domain.order.dto.CreateOrderReqDto
import ziweek.milipat.domain.order.dto.UpdateOrderReqDto
import ziweek.milipat.domain.order.entity.Order
import ziweek.milipat.domain.order.repository.OrderRepository

@Service
class OrderService(
    private val orderRepository: OrderRepository
) {

    fun createOrder(createOrderReqDto: CreateOrderReqDto): Order {
        return orderRepository.save(createOrderReqDto.toEntity())
    }

    fun getOrderById(id: Long): Order {
        return orderRepository.findOrderById(id)
    }

    fun updateOrder(updateOrderReqDto: UpdateOrderReqDto): Order {
        return orderRepository.save(updateOrderReqDto.toEntity())
    }

    fun deleteOrderById(id: Long) {
        return orderRepository.deleteById(id)
    }
}