"""Recreates dispatch_user_organization_dispatch_user_id_fkey and dispatch_user_organization_organization_id_fkey

Revision ID: 8f364cf49a23
Revises: 0ab4f8f54bfa
Create Date: 2021-07-22 14:59:12.629986

"""
from alembic import op


# revision identifiers, used by Alembic.
revision = "8f364cf49a23"
down_revision = "0ab4f8f54bfa"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        "dispatch_user_organization_dispatch_user_id_fkey",
        "dispatch_user_organization",
        type_="foreignkey",
    )
    op.drop_constraint(
        "dispatch_user_organization_organization_id_fkey",
        "dispatch_user_organization",
        type_="foreignkey",
    )
    op.create_foreign_key(
        None,
        "dispatch_user_organization",
        "organization",
        ["organization_id"],
        ["id"],
        source_schema="dispatch_core",
        referent_schema="dispatch_core",
    )
    op.create_foreign_key(
        None,
        "dispatch_user_organization",
        "dispatch_user",
        ["dispatch_user_id"],
        ["id"],
        source_schema="dispatch_core",
        referent_schema="dispatch_core",
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        None, "dispatch_user_organization", schema="dispatch_core", type_="foreignkey"
    )
    op.drop_constraint(
        None, "dispatch_user_organization", schema="dispatch_core", type_="foreignkey"
    )
    op.create_foreign_key(
        "dispatch_user_organization_organization_id_fkey",
        "dispatch_user_organization",
        "organization",
        ["organization_id"],
        ["id"],
    )
    op.create_foreign_key(
        "dispatch_user_organization_dispatch_user_id_fkey",
        "dispatch_user_organization",
        "dispatch_user",
        ["dispatch_user_id"],
        ["id"],
    )
    # ### end Alembic commands ###