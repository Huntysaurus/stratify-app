class VendorsController < ApplicationController

    def index
        vendors = Vendor.all
        render json: vendors, include: [:products], status: :ok
    end

end
