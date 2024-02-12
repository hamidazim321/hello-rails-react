Rails.application.routes.draw do
  root 'root#index'

  namespace :api do 
    get '/greetings', to: "messages#random"
  end

  get '*path', to: 'root#index', constraints: ->(req) { req.format == :html }
  get "up" => "rails/health#show", as: :rails_health_check
end
