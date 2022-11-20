class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total

  belongs_to :user, dependent: :destroy
  has_many :order_items
  has_many :products, through: :order_items
end
