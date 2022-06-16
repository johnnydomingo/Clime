class CitiesController < ApplicationController
  before_action :authorize_request, :set_city, only: [:show, :create]

  # GET /cities
  def index
    @cities = City.all

    render json: @cities
  end

  # GET /cities/1
  def show
    render json: @city, except: :user_id
  end

  # POST /cities
  def create
    @city = City.new(city_params)
    @city.user = @current_user
    if @city.save
      render json: @city, status: :created, location: @city
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /cities/1
  # def update
  #   if @city.update(city_params)
  #     render json: @city
  #   else
  #     render json: @city.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /cities/1
  # def destroy
  #   @city.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def city_params
      params.require(:city).permit(:location, :temperature, :image, :user_id)
    end
end
