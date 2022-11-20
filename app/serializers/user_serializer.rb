class UserSerializer < ActiveModel::Serializer
  attributes :name, :username, :email, :password, :password_confirmation
  has_many :reviews, dependent: :destroy
  has_one :cart, dependent: :destroy
  has_many :cart_items, through: :cart, dependent: :destroy
  has_many :products, Through: :cart_items, dependent: :destroy
end
