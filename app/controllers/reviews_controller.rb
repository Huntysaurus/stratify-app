class ReviewsController < ApplicationController

    def index
        if params[:product_id]
            product = Product.find(params[:product_id])
            byebug
            reviews = product.reviews
        elsif
            user = @current_user
            reviews = user.reviews
        end
        render json: reviews, include: [:user, :product], status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

end

private

def review_params
    params.permit(:description, :stars, :user_id, :product_id)
end