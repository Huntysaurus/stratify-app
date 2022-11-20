class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :product_id

  belongs_to :order, dependent: :destroy
  belongs_to :product, dependent: :destry
end
