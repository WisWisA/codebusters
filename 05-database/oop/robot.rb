class Robot
  # class variable
  @@robot_count = 0

  def initialize
    @@robot_count += 1
    @name = "#{prefix}#{suffix}"
  end

  # instance method
  def name
    @name
  end

  def prefix
    ('aa'..'zz').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end

  # instance method
  def reset
  end

  # class method
  def self.info
    "I am the robot God"
  end

end

r1 = Robot.new
r1.name

Robot.info