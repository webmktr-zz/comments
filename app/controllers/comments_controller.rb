class CommentsController < ApplicationController

  respond_to :json

  def index
    render :json => Comment.all.to_json #(include: :user)
    #respond_with Comment.all
  end

  def create
    @comment = current_user.comments.build(params[:comment])
    if @comment.save
      render :status => :ok, :nothing => true
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(params[:comment])
      render :status => :ok, :nothing => true
    end
  end

  def destroy
  end
end
