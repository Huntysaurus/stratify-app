class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.string :session_id
      t.string :product_id

      t.timestamps
    end
  end
end
