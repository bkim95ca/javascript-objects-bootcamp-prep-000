/*const firstMeal = 'lunch'

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals['second breakfast'] = 'bagel';
meals.breakfast = 'cereal'

console.log(meals['breakfast']) */

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}


const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

console.log(recipe)
