from .db import db
from .user import User
from .artist import Artist
from .playlistsong import playlistSong
# from .album import Album
# from .playlist import Playlist


class Song(db.Model):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    songItself = db.Column(db.String, nullable=False, unique=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    artistId = db.Column(db.Integer, db.ForeignKey('artists.id'), nullable=True)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable=True)
    songLength = db.Column(db.String, nullable=True)


    albums = db.relationship("Album", back_populates="songs")
    artists = db.relationship("Artist", back_populates="songs")
    playlists = db.relationship("Playlist", secondary="playlistSongs", back_populates="songs")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "songItself": self.songItself,
            "userId": self.userId,
            "artistId": self.artistId,
            "albumId": self.albumId,
            "songLength": self.songLength,
            "artistName": self.artists.name,
        }
