class AllRecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end
  
  def new

  end

  
end
