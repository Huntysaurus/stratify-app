class ReviewsController < ApplicationController

    def index
        if params[:product_id]
            product = Product.find(params[:product_id])
            reviews = product.reviews
        elsif params[:user_id]
            user = @current_user
            reviews = user.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: [:user, :product], status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

end

private

def review_params
    params.permit(:description, :stars, :user_id, :product_id)
end