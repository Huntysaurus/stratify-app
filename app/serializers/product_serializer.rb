class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :image, :description
end
