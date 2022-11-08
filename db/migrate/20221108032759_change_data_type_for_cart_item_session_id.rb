class ChangeDataTypeForCartItemSessionId < ActiveRecord::Migration[6.1]
  def change
    change_column :cart_items, :session_id, 'integer USING CAST(session_id AS integer)'
  end
end
