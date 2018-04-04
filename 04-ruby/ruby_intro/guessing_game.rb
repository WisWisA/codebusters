require 'pry'

secret = 13

puts 'welcome to the guessing game'
print('guess a number: ')
guess = gets.chomp.to_i

while guess != secret
  print 'guess a number: '
  guess = gets.chomp.to_i
end

puts 'you win!'

