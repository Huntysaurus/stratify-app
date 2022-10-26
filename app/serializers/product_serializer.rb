class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :price, :image, :description
end
