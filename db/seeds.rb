# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Weather.destroy_all
User.destroy_all

@johnny = User.create!(first_name: 'Johnny', last_name: 'Domingo', email: 'johnnykdomingo@email.com', password: '123456')
@lenny = User.create!(first_name: 'Lenny', last_name: 'Kai', email: 'lenny@email.com', password: '123456')


@weather1 = Weather.create!(Location: 'Dubai', image: 'https://i.imgur.com/iwZfiQC.png', user:@johnny)
@weather2 = Weather.create!(Location: 'Los Angeles', image: 'https://i.imgur.com/oPwqrTl.png', user:@johnny)
@weather3 = Weather.create!(Location: 'London', image: 'https://i.imgur.com/DgGMgAv.png', user:@johnny)
@weather4 = Weather.create!(Location: 'New York City', image: 'https://i.imgur.com/pkJGEiT.png', user:@johnny)
@weather5 = Weather.create!(Location: 'Paris', image: 'https://i.imgur.com/CxE6epu.png', user:@johnny)

puts "#{User.count} users created"
puts "#{Weather.count} cities created"