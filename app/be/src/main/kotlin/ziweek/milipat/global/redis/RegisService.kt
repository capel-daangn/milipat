package ziweek.milipat.global.redis

import org.springframework.data.redis.core.RedisTemplate
import org.springframework.stereotype.Service
import java.time.Instant
import java.util.*
import java.util.concurrent.TimeUnit

@Service
class RegisService(
    private val redisTemplate: RedisTemplate<String, Any>
) {

    private val queueKey = "service_wait_queue"
    fun setStringOps(key: String, value: String, expiredTime: Long) {
        redisTemplate.opsForValue()
            .set(key, value, expiredTime, TimeUnit.MILLISECONDS)
    }

    fun getStringOps(key: String): String {
        return redisTemplate.opsForValue()
            .get(key)
            .toString()
    }

    fun getRefreshToken(accountId: String): Optional<String> {
        return Optional.ofNullable(
            getStringOps("RefreshToken:" + accountId)
        )
    }

    fun getBlackList(accountId: String): Optional<String> {
        return Optional.ofNullable(
            getStringOps("BlackList:" + accountId)
        )
    }

    fun getIdempotencyToken(accountId: String): Optional<String> {
        return Optional.ofNullable(
            getStringOps("IdempotencyToken:" + accountId)
        )
    }

    fun deleteData(key: String) {
        redisTemplate.delete(key)
    }

    fun addRequestToQueue(requestId: String, priority: Double = Instant.now().epochSecond.toDouble()) {
        redisTemplate.opsForZSet()
            .add(queueKey, requestId, priority)
    }

//    fun getNextRequestFromQueue(accountId: String) {
//        val zSetOps: ZSetOperations<String, Any> = redisTemplate.opsForZSet()
//        val requests = zSetOps.range(queueKey, 0, 0) // 최소 점수 하나 가져오기
//
//        return requests?.firstOrNull()?.also {
//            zSetOps.remove(queueKey, it) // 가져온 요청 삭제 (pop 효과)
//        }
//    }

//    fun getRankOfQueue(requestId: String, priority): Long? {
//        return redisTemplate.opsForZSet().rank(queueKey, value)
//    }
//
//    fun getSizeOfQueue(key: String): Long? {
//        return redisTemplate.opsForZSet().size(waitQueueKey)
//    }
}