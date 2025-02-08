package ziweek.milipat.domain.order.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import ziweek.milipat.domain.order.entity.Order

@Repository
interface OrderRepository : JpaRepository<Order, Long> {
    fun findOrderById(id: Long): Order
}