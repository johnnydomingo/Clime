class RenameWeatherToCities < ActiveRecord::Migration[6.1]
  def change
    rename_table(:weathers, :cities)
  end
end
