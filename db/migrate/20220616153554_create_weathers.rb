class CreateWeathers < ActiveRecord::Migration[6.1]
  def change
    create_table :weathers do |t|
      t.string :location
      t.integer :temperature
      t.text :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
