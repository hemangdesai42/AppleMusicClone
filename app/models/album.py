from .db import db
from .user import User
from .artist import Artist

class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    releaseDate = db.Column(db.Date, nullable=False)
    order = db.Column(db.Integer, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user": self.user.to_dict(),
            # "artistId": self.,
            "releaseDate": self.releaseDate,
            "order": self.order
        }
