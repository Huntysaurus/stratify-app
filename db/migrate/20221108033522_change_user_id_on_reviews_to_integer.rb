class ChangeUserIdOnReviewsToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :user_id, 'integer USING CAST(user_id AS integer)'
  end
end
