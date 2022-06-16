Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :cities
  resources :users, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
