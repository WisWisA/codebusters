require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)

require_relative 'leap_year'

class LeapYearTest < Minitest::Test

  def test_year_2016_is_leap_year
    assert_equal true, LeapYear.check(2016)  
  end

  def test_year_2017_is_not
    assert_equal false, LeapYear.check(2017)  
  end

  def test_year_1900_is_not
    assert_equal false, LeapYear.check(1900)  
  end

  def test_year_2000_is_a_leap_year
    assert_equal true, LeapYear.check(2000)  
  end
  

end

# 2016, yes
# 2017, no
# 2000, yes
# 1900, no 

