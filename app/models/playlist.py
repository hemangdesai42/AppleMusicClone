from .db import db
from .user import User
# from .song import Song


class Playlist(db.Model):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    order = db.Column(db.Integer, nullable=True)
    imageUrl = db.Column(db.String())
    # songs = db.relationship("Song", back_populates='playlists')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.userId,
            "order": self.order,
            "imageUrl": self.imageUrl
        }
