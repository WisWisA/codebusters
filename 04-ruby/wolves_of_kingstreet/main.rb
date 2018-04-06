require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  erb :index
end

# http://localhost:4567/stock_info?stock_symbol=nflx
get '/stock_info' do
  redirect to('/') if params[:stock_symbol].empty?  
     
  stock_info = StockQuote::Stock.quote(params[:stock_symbol]) 
  
  redirect to('/') if stock_info.nil?  

  @price = stock_info.latest_price
  erb :stock_info
end


get '/about' do
  erb :about
end

get '/donate' do
  'thanks'
end

