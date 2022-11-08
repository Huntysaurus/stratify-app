class CartController < ApplicationController

    def initialize_session
        session[:cart] ||= []
    end

end
