from flask import Flask,jsonify,make_response,request,session
from flask_migrate import Migrate
from models import db,User,Post,Comment,Category
from flask_restful import Api, Resource
from config import app



api= Api(app)

@app.route('/')
def index():
    return '<h1>Hello World<h1>'



class UsersByID(Resource):
    def get(self,id):
        users_by_id = User.query.filter(User.id == id).first()

        response = make_response (users_by_id.to_dict(), 200)

        return response 
    
api.add_resource(UsersByID, '/user/<int:id>')



class Posts(Resource):
    def get(self):
        all_posts = [post.to_dict() for post in Post.query.all()]

        response = make_response(all_posts,200)
        return response
    

    def post(self):
        
        try:
            request_json = request.get_json()
                
            username = request_json['username'] #Will need to insert this when I have the front end running 
            user_row = User.query.filter(User.username == username).first()
            user_id_match = user_row.id

            category_type =request_json['category']
            category_row = Category.query.filter(Category.category_type == category_type).first()
            category_row_match = category_row.id


            new_post = Post(
                title = request_json['title'],
                body = request_json['body'],
                user_id = user_id_match,
                category_id = category_row_match,
                likes = 0
                    
            )

            db.session.add(new_post)
            db.session.commit()
                
            response = make_response( new_post.to_dict(), 200)
            return response 
            
        except ValueError:
            response= make_response({"errors": ["validation errors"]},400)
                
            return response 
            
    def patch(self): #maybe this is for the like button ?

        all_posts = [post.to_dict() for post in Post.query.all()]

        if all_posts:

            try:
            
                request_json = request.get_json()

                for key in request_json:
                    setattr(all_posts,key,request_json[key])

                    db.session.add(all_posts)
                    db.session.commit()
                
                response = make_response(all_posts.to_dict(),200)

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
            

    def delete(self,id):

        posts_by_id = Post.query.filter(Post.id == id).first()

        db.session.delete(posts_by_id)
        db.session.commit()


        response = make_response('sucessfully deleted', 204)

        return response 



    
api.add_resource(PostsbyID,'/posts/<int:id>')


# class CheckSession(Resource):
#     def get(self):
#         user_id = session.get('user_id')

        
#         if user_id:

#             user_row = User.query.filter(User.id == session.get('user_id')).first()
#             response = make_response(user_row.to_dict() ,200)
#             return response 
#         else:
#             response = make_response({'message': '401: Not Authorized'}, 401)
#             return response 
        
# api.add_resource(CheckSession, '/check_session')

class Login(Resource):   
    def post(self):

        username = request.get_json()['username']

        user_row = User.query.filter(User.username == username).first()

        password = request.get_json()['password']

        if user_row.authenticate(password):
            session['user_id'] = user_row.id

            response = make_response( user_row.to_dict(), 201)

            return response 
        else:

            response = make_response ({},404)

            return response 

api.add_resource(Login,'/login')


class Logout(Resource):
    def delete(self):
        session['user_id'] =None
        
        response = make_response({} ,204)
        
        return response 
    
api.add_resource(Logout, '/logout')

