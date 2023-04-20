import express from 'express'
import { RecipeModel } from '../models/Recipes.js'
import { UserModel } from '../models/Users.js'

const router = express.Router()

// All the recipes
router.get('/', async (req, res) => {
  try {
    const response = await RecipeModel.find({}) // since we want all the recipes we don't need conditions
    res.json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to get all the recipes' })
  }
})

// Create a recipe
router.post('/', async (req, res) => {
  const recipe = new RecipeModel(req.body)
  try {
    const response = await recipe.save()
    res.json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create a recipe' })
  }
})

// Save a recipe

router.put('/', async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeID)
    const user = await UserModel.findById(req.body.userID)
    user.savedRecipes.push(recipe)
    await user.save()
    res.json({ savedRecipes: user.savedRecipes })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to save a recipe' })
  }
})

// Get saved recipe
router.get('/savedRecipes/ids', async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID)
    res.json({ savedRecipes: user?.savedRecipes }) // can be null
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to get saved recipe' })
  }
})

// Get saved recipes
router.get('/savedRecipes', async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID)
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes }
    })
    res.json({ savedRecipes }) // can be null
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to get saved recipes' })
  }
})

export { router as recipesRouter }
