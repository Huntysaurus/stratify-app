class Product < ApplicationRecord
    
    has_many :reviews
    has_many :users, through: :reviews
    has_many :cart_items
end
