=begin
  
hackers
  |
  |--mary_poppins
      |--README.md
  |--jo
      |--README.md
  |--lisa
      |--README.md
=end
# you will need methods from FileUtils
# which method to make a directory? FileUtil.mkdir(some_dir_name)
# which method to create a file? FileUtil.touch(some_file_name)
# which method to convert str to lowercase? 'Hello'.downcase 
# you may also need to change directory with FileUtil.cd()

require 'fileutils'

hackers = ['Mary Poppins', 'Jo Black', 'Lisa Simple']

hackers.each do |hacker|
  FileUtils.mkdir(hacker.downcase)
  # FileUtils.cd(hacker)
  FileUtils.touch("#{hacker}/README.md")
  # FileUtils.cd('../')
end



