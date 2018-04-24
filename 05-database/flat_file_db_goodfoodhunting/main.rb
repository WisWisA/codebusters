     
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @dish_names = IO.readlines('dishes.txt')
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  # save it somewhere permanent - say a file called dishes.txt
  File.open('dishes.txt', 'a+') do |file|
    file.puts params[:name]
  end
  redirect to('/')
end





