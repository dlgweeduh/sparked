class BlogController < ApplicationController

def create
  @blog = Blog.new(blog_params)
 
  if @blog.save
  redirect_to @blog
  else
    render 'new'
  end
end

def index
  @blog = Blog.all
end

def edit
  @blog = Blog.find(params[:id])
end

def update
  @blog = Blog.find(params[:id])

  if @blog.update(blog_params)
    redirect_to @blog
  else
    render 'edit'
  end
end

def destroy
  @blog = Blog.find(params[:id])
  @blog.destroy
 
  redirect_to articles_path
end

private 

  def blog_params
    params.require(:blog).permit(:title, :text)
  end

end
