Rails.application.routes.draw do
  
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/me", to: 'users#show'
  
  get "/search/:searched", to: 'products#search'
  get "/search", to: 'products#empty'
  get "/products", to: 'products#index'

  get "/users/:user_id/reviews", to: 'reviews#index'
  get "/product/:product_id/reviews", to: 'reviews#index'

  get "/users/:user_id/orders", to: 'orders#index'
  get "/orders/:id", to: 'orders#index'

  post "/reviews", to: 'reviews#create'
  delete "/reviews/:id", to: 'reviews#destroy'
  
  resources :users do
    resources :reviews
  end

  resources :products do
    resources :reviews, only: [:index ]
  end

  resources :orders, only: [:create]

  resources :carts, only: [:show, :index]

  resources :cart_items, only: [:create, :destroy]

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
