from .db import db
from .user import User
from .artist import Artist
from .album import Album
# from .playlist import Playlist


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    songItself = db.Column(db.String, nullable=False, unique=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=True)
    length = db.Column(db.Date, nullable=False)
    releaseDate = db.Column(db.Date, nullable=False)

    # albums = db.relationship("Album", back_populates="songs")
    # playlists = db.relationship("Playlist", back_populates="songs")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "songItself": self.songItself,
            "userId": self.userId,
            "artistId": self.artistId,
            "albumId": self.albumId,
            "length": self.length,
            "releaseDate": self.releaseDate,
        }
