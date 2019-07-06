
class Scapes < ActiveRecord::Migration[5.2]
  
  def change
    create_table :scapes do |t|
      t.string :stock_name
      t.string :history
      t.date :start_date
      t.date :end_date
    end
  end 

end
