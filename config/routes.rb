Rails.application.routes.draw do
  root 'root#index'

  namespace :api do 
    get '/greetings', to: "messages#random"
  end
  get "up" => "rails/health#show", as: :rails_health_check
end
