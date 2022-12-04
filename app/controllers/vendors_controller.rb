class VendorsController < ApplicationController

    def index
        vendors = Vendor.all
        render json: vendors, status: :ok
    end

end
