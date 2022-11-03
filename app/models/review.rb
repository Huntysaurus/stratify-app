class Review < ApplicationRecord
    validates :description, presence: true, length: { in: 5..100}
    belongs_to :user
    belongs_to :product
end
