# from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import bcrypt,db


# db = SQLAlchemy()


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
    username = db.Column(db.String, unique=True)
    _password_hash =db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default =db.func.now())

    #Relationship
    posts = db.relationship('Post', backref = 'user')

    #seraliaze_rules 
    serialize_rules = ('-posts.user',)

    #username_property

    @hybrid_property
    def password_hash(self):
        raise Exception("Hashed Password")
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8')) 
        self._password_hash = password_hash.decode('utf-8')

    
    def authenticate(self,password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8')) 




    #validations 
    @validates('username')
    def validates_username(self,key,username):
        #print(username)
        if len(username) > 0 :
            return username
        else:
            raise ValueError('must be a unique username and be greater than 0 characters')
        

    @validates('email_address')
    def validates_mail_address(self,key,email_address):
        #print(username)
        if len(email_address) > 0 :
            return email_address
        else:
            raise ValueError('must enter email address that is greater than 0 characters ')


class Post(db.Model,SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key= True)
    title = db.Column(db.String,nullable=False)
    body = db.Column(db.String)
    image = db.Column(db.String)
    likes =db.Column(db.Integer)
    

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    created_at = db.Column(db.DateTime,server_default =db.func.now())

    #seralize_rules 

    serialize_rules = ('-user.posts','-category.posts')



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




