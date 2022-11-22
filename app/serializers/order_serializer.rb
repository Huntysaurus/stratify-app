class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total

  belongs_to :user
  has_many :order_items, dependent: :destroy
  has_many :products, through: :order_items
end
