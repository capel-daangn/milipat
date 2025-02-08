package ziweek.milipat.global.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.client.MongoClient
import com.mongodb.client.MongoClients
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration

@Configuration
class MongoConfig(
    @Value("\${spring.data.mongodb.host}")
    val host: String,

    @Value("\${spring.data.mongodb.port}")
    val port: Int,

    @Value("\${spring.data.mongodb.username}")
    val username: String,

    @Value("\${spring.data.mongodb.password}")
    val password: String,

    @Value("\${spring.data.mongodb.database}")
    val database: String
) : AbstractMongoClientConfiguration() {
    override fun getDatabaseName(): String {
        return database
    }

    override fun mongoClient(): MongoClient {
        val connectionString = ConnectionString(
            "mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin"
        )
        val setting = MongoClientSettings.builder()
            .applyConnectionString(connectionString)
            .build()
        return MongoClients.create(setting)
    }
}