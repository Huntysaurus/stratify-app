class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            cart = Cart.create
            session[:user_id] = user.id
            session[:cart_id] = cart.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :not_found
        end
    end

    def destroy
        session.delete :user_id
        session.delete :cart_id
        head :no_content
    end

end
