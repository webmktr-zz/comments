class Comment < ActiveRecord::Base
  attr_accessible :content, :user_id, :created_at

  belongs_to :user

  def as_json( options = {} )
    { :id => self.id, :name => self.user.name, :content => self.content, :created_at => self.created_at }
  end


end
