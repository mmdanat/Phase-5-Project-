from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()


class Category(db.Model,SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key = True)
    category_type = db.Column(db.String)

    #Relationships
    posts = db.relationship('Post', backref = 'category')

    #serialize_rules 
    serialize_rules = ('-posts.category',)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email_address = db.Column(db.String)
    username = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default =db.func.now())

    #Relationship
    posts = db.relationship('Post', backref = 'user')

    #seraliaze_rules 
    serialize_rules = ('-posts.user',)


    #validations 
    @validates('username')
    def validates_title(self,key,username):
        if username > 0 and not hasattr(username):
            return username
        else:
            raise ValueError('must be a unique username and be greater than 0 characters')


class Post(db.Model,SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key= True)
    title = db.Column(db.String)
    body = db.Column(db.String)
    likes =db.Column(db.Integer)
    

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    created_at = db.Column(db.DateTime,server_default =db.func.now())

    #seralize_rules 

    serialize_rules = ('-user.posts','-category.posts')


    #validations 

    @validates('title')
    def validates_title(self,key,title):
        if title is not None:
            return title 
        else:
            raise ValueError('must be a title')
   


class Comment(db.Model,SerializerMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key =True)
    text = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default =db.func.now())
    post_id = db.Column(db.Integer,db.ForeignKey('posts.id'))
    
    #Relationship 
    # posts = db.relationship('Post', backref='comment')


    #seralize_rules 
    serialize_rules = ('-posts.comment')


