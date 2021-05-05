from .db import db
from .user import User


class Playlist(db.Model):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    order = db.Column(db.Integer, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user": self.user.to_dict(),
            "order": self.order
        }
