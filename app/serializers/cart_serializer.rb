class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id

  belongs_to :user
  has_many :cart_items, dependent: :destroy
  has_many :products, through: :cart_items
end
