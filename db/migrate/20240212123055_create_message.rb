class CreateMessage < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.text :text

      t.timestamps
    end
  end
end
