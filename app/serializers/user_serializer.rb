class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password
  has_many :reviews, dependent: :destroy
  has_many :products, Through: :reviews
end
