Object.assign({}, { foo: 'bar' })
Object.assign({ eggs: 3 }, { flour: '1 cup' })
Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })
function updateObjectWithObject(targetObject, updatesObject) {

  return Object.assign(targetObject, updatesObject)
}


const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

console.log(recipe)
