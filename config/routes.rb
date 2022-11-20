Rails.application.routes.draw do

  resources :order_items
  resources :orders
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/me", to: 'users#show'
  
  get "/search/:searched", to: 'products#search'
  get "/users/:user_id/reviews", to: 'reviews#index'
  get "/users/:user_id/orders", to: 'orders#index'
  get "/product/:product_id/reviews", to: 'reviews#index'
  get "/search", to: 'products#empty'
  get "/products", to: 'products#index'
  get "/orders/:id", to: 'orders#index'
  
  resources :users do
    resources :reviews
  end

  resources :products do
    resources :reviews, only: [:index]
  end

  resources :reviews

  resources :carts, only: [:show, :index]

  resources :cart_items, only: [:create, :destroy]

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
