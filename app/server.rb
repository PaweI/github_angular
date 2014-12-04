require 'sinatra/base'
require 'httparty'
# require 'sinatra/json'
require 'json'

class GithubApi < Sinatra::Base

  # include HTTParty

  get '/:user_name' do
    response['Access-Control-Allow-Origin'] = '*'
    resp = HTTParty.get("https://api.github.com/users/#{params[:user_name]}?access_token=3e63b36e3a7dd1ba44be5e68c0617370eed8a440")
    data = JSON.parse(resp.body)
    data.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
