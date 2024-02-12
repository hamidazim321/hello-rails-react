class Api::MessagesController < ApplicationController
  def random
    greet = Message.order('RANDOM()').first
    render json: {greeting: greet.text}
  end
end
