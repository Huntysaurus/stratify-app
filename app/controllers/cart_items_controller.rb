class CartItemsController < ApplicationController

    def create
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item, status: :created
    end

    def destroy
        product = Product.find_by(id: params[:id])
        cart_item = @current_user.cart_items.find_by(product_id: product.id)
        cart_item.destroy
    end

    private

    def cart_item_params
        params.permit(:cart_id, :product_id, :cart_item, :id)
    end
end
