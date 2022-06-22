class EditCitiestable < ActiveRecord::Migration[6.1]
  def change
    remove_column :cities, :user_id, :bigint
  end
end
