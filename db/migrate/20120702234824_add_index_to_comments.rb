class AddIndexToComments < ActiveRecord::Migration
  def change
        add_index :comments, :ancestry
  end
end
