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

  var selectedCharacter
  var selectedEnemy
  var enemiesLeft = []

  // render to screen
  function renderCharacters () {
    var keys = Object.keys(characters)
    for (var i = 0; i < keys; i++) {
      // get the current character out of the object
      var currentObj = characters[keys[i]]
      // append elements to the body so it looks ok.
      // need to add a data attribute to make sure we can back-reference.
    }
  }

  //* ******click handlers*********//

  /*
   * When the game starts, the player will choose a character
     by clicking on the fighter's picture.
     The player will fight as that character for the rest of the game.
  */
  $().on('click', function () {
    selectedCharacter = this.attr('data-name')
    console.log('player selected')
    /*
      Enemies should be moved to a different area of the screen.
    */
  })

  /*
  *
    The player chooses an opponent by clicking on an enemy's picture.
  */
  $().on('click', function () {
    console.log('enemy clicked')
    selectedEnemy = this.attr('data-name')
    /*
    * Once the player selects an opponent,
      that enemy is moved to a `defender area`.
    */
  })
})
