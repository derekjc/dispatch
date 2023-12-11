"""Adds support for case events

Revision ID: cec9ab5c5c8e
Revises: 32a0fca4da9e
Create Date: 2022-08-02 16:27:57.425836

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "cec9ab5c5c8e"
down_revision = "32a0fca4da9e"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("event", sa.Column("dispatch_user_id", sa.Integer(), nullable=True))
    op.add_column("event", sa.Column("case_id", sa.Integer(), nullable=True))
    op.create_foreign_key(
        None,
        "event",
        "dispatch_user",
        ["dispatch_user_id"],
        ["id"],
        referent_schema="dispatch_core",
        ondelete="CASCADE",
    )
    op.create_foreign_key(None, "event", "case", ["case_id"], ["id"], ondelete="CASCADE")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, "event", type_="foreignkey")
    op.drop_constraint(None, "event", type_="foreignkey")
    op.drop_column("event", "case_id")
    op.drop_column("event", "dispatch_user_id")
    # ### end Alembic commands ###