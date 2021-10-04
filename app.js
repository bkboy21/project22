const $mainContent = $('main')

  // select a random recipe from apiData
  const randomIndex = Math.floor(Math.random() * gBank.length)
  const recipe = gBank[randomIndex]
  displayRecipe(recipe)



  // display recipe image
  const $h1 = $('<h1>')
  $h1.attr('src', recipe.textG)
  $h1.attr('alt', recipe.title)
  $mainContent.append($h1)
