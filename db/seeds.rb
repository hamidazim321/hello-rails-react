messages = ['hello', 'salam', 'hola', 'bonjour', 'pakher']
messages.each do |msg|
  Message.find_or_create_by!(text: msg)
end

puts 'seed database with greeetings'