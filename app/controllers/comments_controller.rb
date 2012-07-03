class CommentsController < ApplicationController
  
  respond_to :json
   
  def index
    render :json => Comment.all.to_json #(include: :user)
    #respond_with Comment.all
  end

  def create
    @comment = current_user.comments.build(params[:comment])
    if @comment.save
      
    end
  end

  def destroy
  end
end
