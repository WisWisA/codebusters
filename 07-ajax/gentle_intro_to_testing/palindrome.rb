

# racecar
# atoyota

def test(expected, actual)
  if expected == actual
    puts 'yay'
  else
    puts 'nay'
  end
end
# if 'racecar' == 'racecar'.reverse
#   puts 'its a palindrome'
# end

def add_one(num)
  return num + 1
end

test(6, add_one(5))
test(11, add_one(10))
test(0, add_one(-1))


def palindrome(str)
  str = str.gsub('!', '')
  str == str.reverse
end



test(true, palindrome('racecar'))
test(true, palindrome('racecar!'))
test(false,  palindrome('goats'))
test(true, palindrome('atoyota'))

# if palindrome('racecar') == true
#   puts 'its pretty good'
# else
#   puts 'its no good'
# end

# if palindrome('atoyota') ==  true
#   puts 'its pretty good'
# end


# sinatra app - main.rb

@languages = ['ruby', 'js', 'css']

# views - show.erb

<%= @languages %>
ruby, js and css

