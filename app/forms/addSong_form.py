from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired
from app.models import User, Playlist, Song, playlistSong


class AddsongForm(FlaskForm):
    playlist_id = IntegerField('playlist_id', validators=[DataRequired()])
    song_id = IntegerField('song_id', validators=[DataRequired()])
