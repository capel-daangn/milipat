package ziweek.milipat.domain.modelingAsset.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class ModelingAsset(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: String? = null,
    val name: String,
    val fileUrl: String,
    val fileSize: Int,
) {
}