require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_query(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  return result
end

get '/' do
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  # 1. get the input from the form via the params hash
  # 2. save it in the database - insert a new record
  # 3. redirect to the home page
  sql = "INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  run_query(sql)
  redirect to('/')
end

get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{params[:id]};"
  results = run_query(sql)
  @dish = results.first
  @comments = run_query("SELECT * FROM comments WHERE dish_id = #{params[:id]};")
  erb :show
end

delete '/dishes' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_query(sql)
  redirect to('/')
end

get '/dishes/:id/edit' do
  # grab it from the database using the id from the path
  result = run_query("SELECT * FROM dishes WHERE id = #{ params[:id] };")
  @dish = result.first
  erb :edit
end

put '/dishes/:id' do
  sql = "UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] };"
  run_query(sql)
  redirect to("/dishes/#{params[:id]}") # redirect to single dish details page
end

post '/comments' do
  sql = "INSERT INTO comments (content, dish_id) VALUES ('#{ params[:content] }', '#{ params[:dish_id] }');"
  run_query(sql)
  redirect to("/dishes/#{ params[:dish_id] }")
end





