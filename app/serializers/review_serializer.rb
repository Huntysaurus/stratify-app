class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :stars, :user_id
end
