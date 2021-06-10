from .db import db

playlistSong = db.Table('playlistSongs',
    db.Column('song_id', db.Integer, db.ForeignKey('songs.id'), primary_key=True),
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlists.id'), primary_key=True)
)
