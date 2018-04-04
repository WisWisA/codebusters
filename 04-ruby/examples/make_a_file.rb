require 'fileutils'

# command line programs
# ARGV argument vector like an array
# puts ARGV[0]

# filename = gets.chomp

FileUtils.touch(ARGV[0])