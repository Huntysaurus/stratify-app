Rails.application.routes.draw do

  post "/login", to: 'sessions#create'
  get "/me", to: 'users#show'
  
  resources :users
  resources :products

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
