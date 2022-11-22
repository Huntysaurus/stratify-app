class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :image, :description
  
  has_many :reviews, dependent: :destroy
  has_many :cart_items, dependent: :destroy
  has_many :carts, through: :cart_items, dependent: :destroy
  has_many :users, through: :cart_items, dependent: :destroy
end
