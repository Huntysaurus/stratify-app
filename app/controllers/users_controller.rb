class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        Cart.create!(user_id: user.id)
        session[:user_id] = user.id
        render json: user, status: :created, include: [ :review, :product, :cart, :cart_item ]
    end

    def show
        render json: @current_user, status: :created, include: [:review, :product, :cart, :cart_item ]
    end

    def update
        user = @current_user.update!(user_params)
        render json: user, status: :accepted 
    end

    private

    def user_params
        params.permit(:id, :name, :username, :email, :password, :password_confirmation )
    end

end
