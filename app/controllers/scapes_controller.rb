
class ScapesController < ApplicationController

    def home
    end

    def index
      @scapes = Scape.all
      render json: @scapes
    end
  
    def show
      @scape = Scape.find(params[:id])
      render json: @scape
    end

  end
  