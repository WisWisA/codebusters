
# $ ruby sum.rb 2 3
# $ 5

# ARGV = ['2', '3']

# puts ARGV[0].to_i + ARGV[1].to_i

# 1. while loop
# total = 0
# index = 0

# while index < ARGV.length
#   puts ARGV[index]
#   total += ARGV[index].to_i
#   index += 1
# end

# puts total
# 2. [].each (personal pick)
require 'pry'

total = 0

ARGV.each do |thing|
  total = total + thing.to_i
  binding.pry
end

# puts total
# 3. other built in array methods



