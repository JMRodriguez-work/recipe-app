import mongoose from 'mongoose'
const { Schema, model } = mongoose

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: { type: Schema.Types.ObjectId, ref: 'users', required: true } // ObjectID is the type of the ID in the DB
})

export const RecipeModel = model('recipes', RecipeSchema)
