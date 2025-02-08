package ziweek.milipat.domain.modelingAsset.dto

import ziweek.milipat.domain.modelingAsset.entity.ModelingAsset

data class CreateModelingAssetReqDto(
    var id: String? = null,
    val name: String,
    val fileUrl: String,
    val fileSize: Int,
) {
    fun toEntity(): ModelingAsset {
        return ModelingAsset(
            name = name,
            fileUrl = fileUrl,
            fileSize = fileSize
        )
    }
}