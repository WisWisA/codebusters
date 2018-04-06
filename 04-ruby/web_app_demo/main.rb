require 'sinatra'
require 'sinatra/reloader' # changes in main.rb does not require a restart of the server
require 'pry'

get '/' do
  'welcome to the home page'
end

get '/chips' do
  orders = ['burgers', 'chips']
  return 'hot chips'
end

#                           |--- querystring -------| 
# url - localhost:4567/hello?name=codebusters&size=11
# starting from the ? is called a query string
get '/hello' do
  # params is a magic global hash
  # binding.pry
  return "Hi #{ params[:name] } how are you?"
end

get '/lucky_number' do
  "here is your lucky number: #{ rand(1..20) }"
end

# like a function
# localhost:4567/multiply?num1=3&num2=5
get '/multiply' do
  result = params[:num1].to_f * params[:num2].to_f
  "the result is #{result}"
end

get '/about' do
  @name = 'codebusters'
  erb(:some_page)
end