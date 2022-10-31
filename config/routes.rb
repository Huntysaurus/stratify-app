Rails.application.routes.draw do

  post "/login", to: 'sessions#create'
  get "/me", to: 'users#show'
  
  get "/search/:searched", to: 'products#search'
  
  resources :users
  resources :products

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
