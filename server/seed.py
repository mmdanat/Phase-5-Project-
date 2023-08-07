from app import app
from models import db, User,Post,Comment,Category



with app.app_context():


    User.query.delete()
    Post.query.delete()
    Comment.query.delete()
    Category.query.delete()
    
    u1 = User(first_name = 'Abby', last_name ='Mary', email_address='abbymary@gmail.com', username = 'MaryA99')
    u2 = User(first_name = 'Lacey', last_name ='Stevens', email_address='Laceysteve@gmail.com', username = 'LaceysCastle23')
    
    
    db.session.add(u1)
    db.session.add(u2)
    db.session.commit()

    user_1_password = "shoe-lace"

    user_2_password = "bigDog"

    u1.password_hash = user_1_password

    u2.password_hash = user_2_password

    db.session.add(u1)

    db.session.add(u2)

    db.session.commit()



    category1 =Category(category_type = 'food')
    category2 =Category(category_type ='drink' )
   
    db.session.add(category1)
    db.session.add(category2)
    db.session.commit()


    post1 = Post(user_id = u1.id, title = "Cookies for Dinner", body = "1 Cup Water, 1 Cup Sugar , 2 tsp vanilla, 2 large eggs, 3 cups flower , 1 tsp baking soda, 1 teaspoon baking powder, 1 tsp salt, 2 cups chocolate chips. Seperate cookie dough in equal parts and bake in baking sheet at 375 degrees for 8-10 minutes !",likes = 0 , category_id = category1.id,image = "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-threeByTwoMediumAt2X.jpg")
    post2 = Post(user_id = u2.id, title = "Tacos", body = " 2 lb groud Beef, 1tsp taco seasoning, 1 tsp salt, 1 large tomatoe, 1/3 cup of onion, 1 pack of hard tacos shells. Cook ground beef and add seasoning, warm taco shells in the oven, add meat and veggies to taco shells and enjoy! ",likes = 0 , category_id = category1.id, image = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg")
    
    db.session.add(post1)
    db.session.add(post2)
    db.session.commit()

    comment1 =Comment(text = "How tasty", post_id =post1.id)

    db.session.add(comment1)
    db.session.commit()


 

    

    


    





    
