class OrdersController < ApplicationController

    def create
        order = Order.create(user_id: @current_user.id, total: params[:total] )
        cart_items = order.user.cart.cart_items
        cart_items.each do |i|
            OrderItem.create(order_id: order.id, product_id: i.product_id)
        end
        cart_items.destroy_all
        render json: order, status: :created
    end

    def index
        if  params[:user_id]
            orders = @current_user.orders
            render json: orders, status: :created
        else
            render json: Order.all, status: :accepted
        end
    end

end
