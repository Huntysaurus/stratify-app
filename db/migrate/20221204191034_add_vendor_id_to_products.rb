class AddVendorIdToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :vendor_id, :integer 
  end
end
