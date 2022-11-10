class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id

  belongs_to :product
  belongs_to :user
end
