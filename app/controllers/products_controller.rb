class ProductsController < ApplicationController
    skip_before_action :authorize

    def index
        products = Product.all
        render json: products, include: [:cart_items, :reviews, :cart_id, :vendor], status: :ok
    end

    def search
        searched = params[:searched].downcase
        product = Product.where('lower(category) LIKE ?', "%" + searched + "%" )
        if product
            render json: product, include: [:cart_items, :reviews, :cart_id, :vendor], status: :ok
        elsif product === nil
            products = Product.all
            render json: products, include: [:cart_items, :reviews, :cart_id, :vendor], status: :ok
        end
    end

    def filter
        products = Product.where(vendor_id: params[:id])
        if products
            render json: products, include: [:cart_items, :reviews, :cart_id, :vendor], status: :ok
        elsif product === nil
            products = Product.all
            render json: products, include: [:cart_items, :reviews, :cart_id, :vendor], status: :ok
        end
    end

    def empty
        products = Product.all
        render json: products, status: :ok
    end

end
