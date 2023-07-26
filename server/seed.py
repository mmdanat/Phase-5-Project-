from app import app
from models import db, User,Post,Comment,Category

with app.app_context():


    User.query.delete()
    Post.query.delete()
    Comment.query.delete()
    Category.query.delete()

    u1 = User(first_name = 'Abby', last_name ='Mary', email_address='abbymary@gmail.com', username = 'MaryA')

    db.session.add(u1)
    db.session.commit()


    category1 =Category(category_type = 'food')
   
    db.session.add(category1)
    db.session.commit()


    post1 = Post(user_id = u1.id, title = "hello", body = "5 cups sugar , 1 cup milk , 2 cups oil !",likes = 0 , category_id = category1.id)
    
    db.session.add(post1)
    db.session.commit()

    comment1 =Comment(text = "How tasty", post_id =post1.id)

    db.session.add(comment1)
    db.session.commit()


 

    

    


    





    
