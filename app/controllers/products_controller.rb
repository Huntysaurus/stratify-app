class ProductsController < ApplicationController
    skip_before_action :authorize

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def show
        product = Product.find(params[:id])
        byebug
        render json: product, status: :ok
    end

end
