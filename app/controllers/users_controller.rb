class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        Cart.create!(user_id: user.id)
        session[:user_id] = user.id
        render json: user, status: :created, include: :cart
    end

    def show
        render json: @current_user, include: [:review, :product, :cart ], status: :ok
    end

    def update
        user = @current_user.update!(user_params)
        render json: user, status: :accepted 
    end

    private

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation )
    end

end
