class ProductsController < ApplicationController
    skip_before_action :authorize

    def index
        products = Product.all
        render json: products, include: :reviews, status: :ok
    end

    def search
        searched = params[:searched].downcase
        product = Product.where('lower(category) LIKE ?', "%" + searched + "%" )
        if product
            render json: product, status: :ok
        else
            products = Product.all
            render json: products, status: :ok
        end
    end

    def empty
        products = Product.all
        render json: products, status: :ok
    end

end
