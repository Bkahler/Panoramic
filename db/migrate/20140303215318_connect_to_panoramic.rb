ActiveRecord::Schema.define(version: 20140304194222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "kmls", primary_key: "ogc_fid", force: true do |t|
    t.binary "wkb_geometry"
    t.string "name",         limit: nil
    t.string "description",  limit: nil
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "auth_token"
  end

end