class Product < ApplicationRecord
    belongs_to :vendor
    has_many :reviews, dependent: :destroy
    has_many :cart_items, dependent: :destroy
    has_many :carts, through: :cart_items, dependent: :destroy

end
