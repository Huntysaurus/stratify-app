class CartsController < ApplicationController

    def show
        cart = @current_user.cart
        render json: cart, status: :ok, include: [:cart_items, :products]
    end

    def index
        carts = Cart.all
        render json: carts, status: :ok
    end

end
