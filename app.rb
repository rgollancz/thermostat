require 'sinatra'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  get "/temperature" do
    temperature = session[:temperature] || 0.to_s

    content_type :json
    { temperature: count }.to_json
  end

  post "/temperature" do
    session[:temperature] = params[:temperature]
    200
  end

  get "/power_save_status" do
    power_save_status = session[:power_save_status] || 0.to_s

    content_type :json
    { power_save_status: count }.to_json
  end

  post "/power_save_status" do
    session[:power_save_status] = params[:power_save_status]
    200
  end

  run! if app_file == $0
end
