class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: { in: 6..15 }
    validates :password_digest, presence: true
    validates :name, presence: true, length: { in: 2..15 }
    has_secure_password
    
    has_one :cart, dependent: :destroy
    has_many :cart_items, through: :cart, dependent: :destroy
    has_many :products, through: :cart_items
    has_many :reviews, dependent: :destroy
    has_many :orders, dependent: :destroy
end
