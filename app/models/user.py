from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(100), default='N/A')
    last_name = db.Column(db.String(100), default='N/A')
    career = db.Column(db.String(150), 
    default='N/A')
    location = db.Column(db.String(100), default='N/A')
    bio = db.Column(db.String(1000), 
    default='N/A')
    image = db.Column(db.String())

    

    # first_name = db.Column(db.String(20), nullable=False)
    # last_name = db.Column(db.String(20), nullable = False)
    # location = db.Column(db.String(20), nullable = False)
    # career = db.Column(db.String(20), nullable = False)

    interview = relationship('Interview', back_populates='user', cascade='all, delete-orphan')
    list = relationship('FavoriteList', back_populates='user', cascade='all, delete-orphan')
    comment = relationship('Comment', back_populates='user', cascade='all, delete-orphan')
    # profile = relationship('Profile', back_populates = 'user', cascade='all, delete-orphan')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstName': self.first_name,
            'last_name': self.last_name,
            'career':self.career,
            'location': self.location,
            'bio':self.bio,
            'image':self.image
        }
