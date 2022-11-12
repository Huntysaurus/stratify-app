class CartItem < ApplicationRecord
    validates :cart_id, uniqueness: :true
    belongs_to :cart
    belongs_to :product
end
