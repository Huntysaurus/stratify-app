class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :user_id
      t.string :total

      t.timestamps
    end
  end
end
