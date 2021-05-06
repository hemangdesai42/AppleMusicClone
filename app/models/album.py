from .db import db
from .user import User
from .artist import Artist
# from .song import Song


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    releaseDate = db.Column(db.Date, nullable=False)
    order = db.Column(db.Integer, nullable=True)
    imageUrl = db.Column(db.String, nullable=True)

    # artists = db.relationship("Artist", back_populates="albums")
    # songs = db.relationship("Song", back_populates="albums")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.userId,
            "artistId": self.artistId,
            "releaseDate": self.releaseDate,
            "order": self.order,
            "imageUrl": self.imageUrl
        }
