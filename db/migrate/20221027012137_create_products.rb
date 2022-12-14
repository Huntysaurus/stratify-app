class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.decimal :price
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
