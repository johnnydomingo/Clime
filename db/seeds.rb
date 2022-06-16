# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all
User.destroy_all

@johnny = User.create!(first_name: 'Johnny', last_name: 'Domingo', email: 'johnnykdomingo@email.com', password: '123456')
@lenny = User.create!(first_name: 'Lenny', last_name: 'Kai', email: 'lenny@email.com', password: '123456')


@city1 = City.create!(Location: 'Dubai', image: 'https://i.imgur.com/iwZfiQC.png', user:@johnny)
@city2 = City.create!(Location: 'Los Angeles', image: 'https://i.imgur.com/oPwqrTl.png', user:@johnny)
@city3 = City.create!(Location: 'London', image: 'https://i.imgur.com/DgGMgAv.png', user:@johnny)
@city4 = City.create!(Location: 'New York City', image: 'https://i.imgur.com/pkJGEiT.png', user:@johnny)
@city5 = City.create!(Location: 'Paris', image: 'https://i.imgur.com/CxE6epu.png', user:@johnny)

puts "#{User.count} users created"
puts "#{City.count} cities created"