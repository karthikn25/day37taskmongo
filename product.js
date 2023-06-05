//Find all the information about each products
db.product.find({}).toArray()

//Find the product price which are between 400 to 800
db.product.find({ product_price: { $gte: 400, $lte: 800 } })

//Find the product price which are not between 400 to 600
db.product.find({product_price:{$not:{$gte:400, $lte:600}}})

//List the four product which are grater than 500 in price 
db.product.find({product_price:{$gt:500}}).limit(4)

//Find the product name and product material of each products
db.product.find().forEach(function(prod){print("product name :",prod.product_name,"product material :",prod.product_material)})

//Find the product with a row id of 10
db.product.find({id:`10`})

//Find only the product name and product material
db.product.find().forEach(function(prod){print(prod.product_name,prod.product_material)})

//Find all products which contain the value of soft in product material 
db.product.find({product_material:"Soft"})

//Find products which contain product color indigo  and product price 492.00
db.product.find({$or:[{product_color:'indigo'},{product_price:`492.00`}]})

//Delete the products which product price value are same
db.product.deleteMany({product_price:`36.00`})



