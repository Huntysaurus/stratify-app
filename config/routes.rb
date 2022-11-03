Rails.application.routes.draw do

  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/me", to: 'users#show'
  
  get "/search/:searched", to: 'products#search'
  get "/search", to: 'products#empty'
  get "/products", to: 'products#index'
  
  resources :users

  resources :products do
    resources :reviews, only: [:index]
  end

  resources :reviews

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
