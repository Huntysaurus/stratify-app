class UsersController < ApplicationController

    def create
        byebug
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user. status: :created
    end


    private

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end

end
