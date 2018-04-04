# examples 
# racecar

# define method - ? means method should return boolean - ruby convention
def palindrome?(str)
  punctuation_removed = str.gsub(/[\s!]/, '')
  return punctuation_removed == punctuation_removed.reverse
end

puts palindrome? 'race car!' # => true 
puts palindrome? 'apple' # => false


