require "capybara/rspec"
require_relative "../../../app"

Capybara.app = Thermostat

feature 'serve web page' do
  scenario 'should serve home page' do
    visit('/')
    expect(page).to have_content "Current city"
  end
end

feature 'retrieve a temperature as json' do
  scenario 'should be able to return a temperature'
    visit('/temperature')
    expect(page).to have_content '{"temperature":"0"}'
end
end
