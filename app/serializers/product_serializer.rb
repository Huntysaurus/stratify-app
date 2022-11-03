class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :image, :description
  has_many :reviews
  has_many :users, through: :reviews
end
