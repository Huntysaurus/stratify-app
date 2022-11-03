class ReviewsController < ApplicationController

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

end

private

def review_params
    params.permit(:description, :stars, :user_id, :product_id)
end