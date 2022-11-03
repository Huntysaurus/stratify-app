class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :stars
      t.string :user_id

      t.timestamps
    end
  end
end
