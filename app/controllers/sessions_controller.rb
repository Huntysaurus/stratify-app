class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by!(username: params[:userObj][:username])
        if user&.authenticate(params[:userObj][:password])
            session[:user_id] = user.id
            render json: user, status: :ok, include: [:review, :product, :cart, :cart_item ]
        else
            render json: { error: user.errors.full_messages }, status: :not_found
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
