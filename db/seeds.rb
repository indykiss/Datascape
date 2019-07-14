# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


scapes = Scape.create(
    [ 
        { scape_name: "Apple scape", 
        stock_name: "AAPL",
        history: {
            open: "202",
            close: "203"
            },
        start_date: 2018-12-01,
        end_date: 2018-12-15
        },
        { scape_name: "Restaurant brands scape", 
        stock_name: "QSR",
        history: {
            open: "23",
            close: "25"
            },
        start_date: 2019-1-10,
        end_date: 2019-2-20
        } 
    ]
)