package ziweek.milipat.domain.modelingAsset.dto

import ziweek.milipat.domain.modelingAsset.entity.ModelingAsset

class UpdateModelingAssetReqDto(
    var id: String,
    val name: String,
    val fileUrl: String,
    val fileSize: Int,
) {
    fun toEntity(): ModelingAsset {
        return ModelingAsset(
            id = id,
            name = name,
            fileUrl = fileUrl,
            fileSize = fileSize,
        )
    }
}