from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  username = db.Column(db.String(40), nullable = False, unique = True)
  name = db.Column(db.String(length=50), nullable=False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  createdAt = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
  playlists = db.relationship("Playlist", back_populates="users")
  #  cascade="all, delete-orphan")

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
      "id": self.id,
      "username": self.username,
      "name": self.name,
      "email": self.email,
      "createdAt": self.createdAt
    }
