package ziweek.milipat.domain.modelingAsset.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.milipat.domain.modelingAsset.dto.CreateModelingAssetReqDto
import ziweek.milipat.domain.modelingAsset.dto.UpdateModelingAssetReqDto
import ziweek.milipat.domain.modelingAsset.entity.ModelingAsset
import ziweek.milipat.domain.modelingAsset.service.ModelingAssetService

@Controller
class ModelingAssetResolver(
    private val modelingAssetService: ModelingAssetService
) {
    @MutationMapping
    fun createModelingAsset(
        @Argument(name = "createModelingAssetInput") createModelingAssetReqDto: CreateModelingAssetReqDto
    ): ModelingAsset {
        return modelingAssetService.createModelingAsset(createModelingAssetReqDto)
    }

    @QueryMapping
    fun getModelingAssetById(@Argument id: String): ModelingAsset {
        return modelingAssetService.getModelingAssetById(id)
    }

    @MutationMapping
    fun updateModelingAsset(
        @Argument(name = "updateModelingAssetInput") updateModelingAssetReqDto: UpdateModelingAssetReqDto
    ): ModelingAsset {
        return modelingAssetService.updateModelingAsset(updateModelingAssetReqDto)
    }

    @MutationMapping
    fun deleteModelingAsset(@Argument id: String) {
        return modelingAssetService.deleteModelingAssetById(id)
    }
}