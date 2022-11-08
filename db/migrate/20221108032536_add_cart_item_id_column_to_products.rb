class AddCartItemIdColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :cart_item_id, :integer
  end
end
