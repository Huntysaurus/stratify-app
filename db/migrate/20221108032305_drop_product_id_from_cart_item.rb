class DropProductIdFromCartItem < ActiveRecord::Migration[6.1]
  def change
    remove_column :cart_items, :product_id, :string
  end
end
