from .db import db
from .song import Song
from .playlist import Playlist


class PlaylistSong(db.Model):
    __tablename__ = 'playlistSongs'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    playlistId = db.Column(db.Integer, db.ForeignKey('playlists.id'), nullable=False)
    songId = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False)
    order = db.Column(db.Integer, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "playlistId": self.playlistId,
            "songId": self.songId,
            "order": self.order
        }
