require 'pry'

class School

  def initialize(name)
    @db = {}
  end

  def db
    @db
  end

  def add(name, grade)
    # 1. @db[grade] = Array(@db[grade]).push(name)

    # @db[grade] ||= []
    # @db[grade] << name

    if @db[grade]
      @db[grade] << name
    else
      @db[grade] = [name]
    end
  end

  def grade(grade)
    @db[grade]
  end
end

binding.pry

puts 'hello'