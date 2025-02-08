package ziweek.milipat.domain.modelingAsset.exception

class ModelingAssetNotFoundException(
    override val message: String = "Model not found"
) : RuntimeException(message) {
}