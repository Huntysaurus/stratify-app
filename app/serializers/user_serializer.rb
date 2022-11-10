class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password
  has_many :reviews, dependent: :destroy
  has_many :products, Through: :reviews
  has_one :cart, dependent: :destroy
  has_many :cart_items, through: :cart, dependent: :destroy
end
