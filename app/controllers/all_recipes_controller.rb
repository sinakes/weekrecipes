class AllRecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end
  
  def new
    @recipe = Recipe.new
    redirect_to root_url
  end
  
  def create
    @recipe = Recipe.new(recipe_params)
      if @recipe.save
			redirect_to '/all_recipes/index'
		else
			render 'new'
		end
  end

private 
  def recipe_params 
    params.require(:recipe).permit(:name, :ingredients, :how, :nutrients) 
  end
  
end
