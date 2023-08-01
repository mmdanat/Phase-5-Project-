from app import app
from models import db, User,Post,Comment,Category



with app.app_context():


    User.query.delete()
    Post.query.delete()
    Comment.query.delete()
    Category.query.delete()
    
    u1 = User(first_name = 'Abby', last_name ='Mary', email_address='abbymary@gmail.com', username = 'MaryA')
    u2 = User(first_name = 'Lacey', last_name ='Stevens', email_address='Laceysteve@gmail.com', username = 'Laceys')
    
    
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


    post1 = Post(user_id = u1.id, title = "hello", body = "5 cups sugar , 1 cup milk , 2 cups oil !",likes = 0 , category_id = category1.id)
    post2 = Post(user_id = u2.id, title = "goodbye", body = "5 cups sugar , 1 cup milk , 2 cups oil !",likes = 0 , category_id = category1.id)
    
    db.session.add(post1)
    db.session.add(post2)
    db.session.commit()

    comment1 =Comment(text = "How tasty", post_id =post1.id)

    db.session.add(comment1)
    db.session.commit()


 

    

    


    





    
