from flask import Flask,jsonify,make_response,request
from flask_migrate import Migrate
from models import db,User,Post,Comment,Category
from flask_restful import Api, Resource
from flask_cors import CORS

app =Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate =Migrate(app,db) 

db.init_app(app)

api= Api(app)

CORS(app)

@app.route('/')
def index():
    return '<h1>Hello World<h1>'



class Users(Resource):
    def get(self):

        all_users = [user.to_dict(rules = ('-posts',)) for user in User.query.all()]

        response = make_response (all_users, 200)

        return response 
    
api.add_resource(Users, '/user')



class Posts(Resource):
    def get(self):
        all_posts = [post.to_dict() for post in Post.query.all()]

        response = make_response(all_posts,200)
        return response
    

    def post(self):
        posts_list = [post for post in Post.query.all()]
        if posts_list:
            try:
                request_json = request.get_json()

                # username = request_json['username']
                # user_row = User.query.filter(User.username == username).first()
                # user_id_match = user_row.id

                # category_type =request_json['category_id']
                # category_row = Category.query.filter(Category.category_type == category_type).first()
                # category_row_match = category_row.id


                new_post = Post(
                    title = request_json['title'],
                    body = request_json['body'],
                    #user_id = user_id_match,
                    #category_id = category_row_match,
                    likes = 0
                    
                )

                db.session.add(new_post)
                db.session.commit()
                
                response = make_response( new_post.to_dict(), 200)
                return response 
            
            except ValueError:
                response= make_response({"errors": ["validation errors"]},400)
                
                return response 
            

    
api.add_resource(Posts,'/all_posts')



class PostsbyID(Resource):
    def get(self,id):

        posts_by_id = Post.query.filter(Post.id == id).first()

        response = make_response(posts_by_id.to_dict(), 200)

        return response
    

    def patch(self,id):
        posts_by_id = Post.query.filter(Post.id == id).first()
        if posts_by_id:

            try:
            
                request_json = request.get_json()

                for key in request_json:
                    setattr(posts_by_id,key,request_json[key])

                    db.session.add(posts_by_id)
                    db.session.commit()
                response = make_response(posts_by_id.to_dict(), 200)

                return response 
            
            except ValueError:

                response= make_response({"errors": ["validation errors"]},400)
                
                return response 
            
    


    
api.add_resource(PostsbyID,'/posts/<int:id>')


