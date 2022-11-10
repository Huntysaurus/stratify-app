class SwitchWhoBelongsToWhoForCartItemAndProduct < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :cart_item_id, :integer
    add_column :cart_items, :product_id, :integer
  end
end
