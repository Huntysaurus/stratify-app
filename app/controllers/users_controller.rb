class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, include: [:review, :product], status: :ok
    end

    def update
        user = @current_user.update!(user_params)
        render json: user, status: :accepted 
    end

    private

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end

end
