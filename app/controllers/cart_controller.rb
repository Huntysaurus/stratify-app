class CartController < ApplicationController
    before_action :initialize_session

    def initialize_session
        session[:cart] ||= []
    end

end
