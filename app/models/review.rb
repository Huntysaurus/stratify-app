class Review < ApplicationRecord
    validates :description, presence: true, length: { in: 5..100}
end
