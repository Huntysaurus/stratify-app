class CartItemsController < ApplicationController

    def create
        cart_item = CartItem.create(cart_item_params)
        render json: cart_item, status: :created
    end

    private

    def cart_item_params
        params.permit(:cart_id, :product_id)
    end
end
