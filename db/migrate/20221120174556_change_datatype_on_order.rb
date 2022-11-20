class ChangeDatatypeOnOrder < ActiveRecord::Migration[6.1]
  def change
    change_column :order_items, :order_id, 'integer USING CAST(order_id AS integer)'
    change_column :orders, :user_id, 'integer USING CAST(user_id AS integer)'
    change_column :orders, :total, 'decimal USING CAST(total AS decimal)'
  end
end
