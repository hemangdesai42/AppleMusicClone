from re import L
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, url
from app.models import User, Playlist, PlaylistSong, Song


class PlaylistForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    imageUrl = StringField('imageUrl', validators=[url()])
    
