Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'scapes#home'
  match '*path', to: 'scapes#home', via: :all

#  resources :scapes, only: [:index, :show, :new]


end
