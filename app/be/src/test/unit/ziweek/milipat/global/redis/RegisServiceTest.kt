package ziweek.milipat.global.redis

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import kotlin.test.assertEquals

@SpringBootTest
class RegisServiceTest(
    @Autowired private val redisService: RegisService
) {

    @Test
    fun setData() {
        // g
        val key: String = "TestTokenKey"
        val value: String = "abcdefghijklmnopqrstuvwxyz"

        // w
        redisService.setStringOps(key, value, 200)

        // t
        assertEquals(value, redisService.getStringOps(key))
    }

    @Test
    fun deleteData() {
        // g
        val key: String = "TestTokenKey"
        val value: String = "abcdefghijklmnopqrstuvwxyz"
        redisService.setStringOps(key, value, 200)

        // w
        assertEquals(value, redisService.getStringOps(key))
        redisService.deleteData(key)

        // t
        assertEquals("null", redisService.getStringOps(key))
    }
}