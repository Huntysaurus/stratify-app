class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :product_id

  belongs_to :cart
  belongs_to :product
end
