from .db import db
from .user import User
# from .album import Album


class Artist(db.Model):
    __tablename__ = 'artists'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    name = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=True)
    imageUrl = db.Column(db.String, nullable=True)
    # albums = db.relationship("Album", back_populates="artists")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "bio": self.bio,
            "imageUrl": self.imageUrl,
            "userId": self.userId
        }
