# fish = {
#   name: 'nemo',
#   health: 10,
#   speed: 2
# }

require 'pry'

class Fish # starts with caps and CamelCase

  # metaprogramming
  attr_accessor :name # getter & setter
  attr_reader :health # getter
  attr_writer :speed # setter

  def initialize(name) # when a fish created they method will autorun
    puts "new fish is born!!!!!!"
    # health = 10 # scope - local variable
    @health = 10 # instance variable
    @speed = 5
    @name = name
    @stomach = []
  end

  # getter
  # def name # abilities
  #   return @name
  # end

  # # setter
  # def name=(new_name)
  #   @name = new_name
  # end

  def sleep
    @health = @health + 10
  end
  
end

class Plant

  def initialize
    @health = 5
  end

end



binding.pry

puts "welcome to the underwater world"