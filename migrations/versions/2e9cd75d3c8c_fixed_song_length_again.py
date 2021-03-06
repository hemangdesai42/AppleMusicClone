"""fixed song length again

Revision ID: 2e9cd75d3c8c
Revises: 5f13779a965c
Create Date: 2021-05-07 19:33:23.184225

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2e9cd75d3c8c'
down_revision = '5f13779a965c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('songs', sa.Column('songLength', sa.String(), nullable=True))
    op.drop_column('songs', 'length')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('songs', sa.Column('length', sa.DATE(), autoincrement=False, nullable=True))
    op.drop_column('songs', 'songLength')
    # ### end Alembic commands ###
