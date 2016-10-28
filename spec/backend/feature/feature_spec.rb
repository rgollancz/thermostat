require "capybara/rspec"
require_relative "../../../app"

Capybara.app = Thermostat

feature 'serve web page' do
  scenario 'should serve home page' do
    visit('/')
    expect(page).to have_content "Current city"
  end
end
