class ProductsController < ApplicationController
    skip_before_action :authorize

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def search
        searched = params[:searched].downcase
        product = Product.find_by('lower(name) LIKE ?', "%" + searched + "%")
        render json: product, status: :ok
    end

end
