

class LeapYear

  def self.check(year)
    # year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
    if year % 100 == 0 && year % 400 != 0
      return false
    end

    year % 4 == 0
  end

end