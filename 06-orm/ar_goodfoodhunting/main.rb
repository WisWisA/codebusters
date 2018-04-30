require 'sinatra'
require 'sinatra/reloader' # only reloads main.rb
require "sinatra/json"
require 'sinatra/cross_origin'
require 'pg'
require 'pry'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/like'

enable :sessions
enable :cross_origin

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

helpers do

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

end

get '/' do
  @dishes = Dish.limit(8)
  erb :index
end

get '/api/dishes' do
  @dishes = Dish.all
  json @dishes
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  # 1. get the input from the form via the params hash
  # 2. save it in the database - insert a new record
  # 3. redirect to the home page
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]

  
  if dish.save
    redirect to('/')
  else
    erb :new
  end
end

get '/dishes/:id' do
  @dish = Dish.find( params[:id] )
  @comments = @dish.comments
  erb :show
end

delete '/dishes' do
  dish = Dish.find(params[:id])
  dish.destroy
  redirect to('/')
end

get '/dishes/:id/edit' do
  # grab it from the database using the id from the path
  @dish = Dish.find( params[:id] )
  erb :edit
end

put '/dishes/:id' do
  dish = Dish.find( params[:id] )
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  
  redirect to("/dishes/#{params[:id]}") # redirect to single dish details page
end

post '/api/comments' do
  # always json
end

post '/comments' do
  comment = Comment.new
  comment.content = params[:content]
  comment.dish_id = params[:dish_id]
  comment.user_id = current_user.id
  comment.save
  redirect to("/dishes/#{ params[:dish_id] }")
end

get '/login' do
  erb :login
end

post '/session' do
  # check email
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id # single source of truth
    # to prevent data going stale
    # always look it user in the database
    redirect to('/')
  else
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect to('/login')
end

post '/api/likes' do
  like = Like.new
  like.user_id = current_user.id
  like.dish_id = params[:dish_id]

  like.save
  json likes_count: Dish.find(params[:dish_id]).likes.count
end

post '/likes' do
  redirect to('/login') unless logged_in? # guard

  like = Like.new
  like.user_id = current_user.id
  like.dish_id = params[:dish_id]
  if like.save
    redirect to("/dishes/#{ params[:dish_id] }")
  end
end

options "*" do
  response.headers["Allow"] = "GET, POST, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  response.headers["Access-Control-Allow-Origin"] = "*"
  200
end





