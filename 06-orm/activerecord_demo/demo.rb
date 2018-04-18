require 'active_record'

# database settings
options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(options)
ActiveRecord::Base.logger = Logger.new(STDOUT)

# mapping class to table
# mapping singular dish class to plural dishes table 
class Dish < ActiveRecord::Base
  has_many :comments # plural
end

class Comment < ActiveRecord::Base
  belongs_to :dish # dish_id
  belongs_to :user # user_id
end

require 'pry'

binding.pry

puts 'here comes the magic!!!!!!'