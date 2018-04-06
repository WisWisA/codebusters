require 'sinatra'
require 'sinatra/reloader'
require 'pry'

$emails = ['cake@pudding.com', 'dt@ga.co', 'daniel.tsui@generalassemb.ly']

get '/' do
  erb :home
end

get '/admin' do
  @emails = $emails
  erb :admin
end

get '/process' do
  $emails.push(params[:email])
end