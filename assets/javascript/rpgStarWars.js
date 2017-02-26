// Execute this code when the DOM has fully loaded.
$(document).ready(function () {
  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters = {
    'Obi-Wan Kenobi': {
      name: 'Obi-Wan Kenobi',
      health: 120,
      attack: 8,
      imageUrl: 'assets/images/obi-wan.jpg',
      enemyAttackBack: 15
    },
    'Luke Skywalker': {
      name: 'Luke Skywalker',
      health: 100,
      attack: 14,
      imageUrl: 'assets/images/luke-skywalker.jpg',
      enemyAttackBack: 5
    },
    'Darth Sidious': {
      name: 'Darth Sidious',
      health: 150,
      attack: 8,
      imageUrl: 'assets/images/darth-sidious.png',
      enemyAttackBack: 20
    },
    'Darth Maul': {
      name: 'Darth Maul',
      health: 180,
      attack: 7,
      imageUrl: 'assets/images/darth-maul.jpg',
      enemyAttackBack: 25
    }
  }

  // render to screen

  /*
   * When the game starts, the player will choose a character
     by clicking on the fighter's picture.
     The player will fight as that character for the rest of the game.
  */
  var selectedCharacter

  $().on('click', function () {
    console.log(this)
    selectedCharacter = this.attr('data-name')
    console.log('player selected')
  })

  //
})
