from .db import db

playlistSong = db.Table('playlistSongs',
    db.Column('song_id', db.Integer, db.ForeignKey('songs.id'), primary_key=True),
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlists.id'), primary_key=True))

def to_dict(self):
    return {"playlist_id": self.playlist_id, "song_id": self.song_id}

