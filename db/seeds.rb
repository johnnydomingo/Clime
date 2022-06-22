# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all




@city1 = City.create!(location: 'Dubai', image: 'https://i.imgur.com/iwZfiQC.png')
@city2 = City.create!(location: 'Los Angeles', image: 'https://i.imgur.com/oPwqrTl.png')
@city3 = City.create!(location: 'London', image: 'https://i.imgur.com/DgGMgAv.png')
@city4 = City.create!(location: 'New York City', image: 'https://i.imgur.com/pkJGEiT.png')
@city5 = City.create!(location: 'Paris', image: 'https://i.imgur.com/CxE6epu.png')


puts "#{City.count} cities created"