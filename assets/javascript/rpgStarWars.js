// Execute this code when the DOM has fully loaded.
$(document).ready(function () {
  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters = resetCharacters()

  var gameState = resetGameState()

  /* RESET FUNCTIONS */
  function reset () {
    // resets the game to original state;
    characters = resetCharacters()
    gameState = resetGameState()
  }

  function resetCharacters () {
    // resets the character stats to originals.
    return {
      'obiWanKenobi': {
        name: 'Obi-Wan Kenobi',
        health: 120,
        attack: 8,
        imageUrl: 'assets/images/obi-wan.jpg',
        enemyAttackBack: 15
      },
      'lukeSkywalker': {
        name: 'Luke Skywalker',
        health: 100,
        attack: 14,
        imageUrl: 'assets/images/luke-skywalker.jpg',
        enemyAttackBack: 5
      },
      'darthSidious': {
        name: 'Darth Sidious',
        health: 150,
        attack: 8,
        imageUrl: 'assets/images/darth-sidious.png',
        enemyAttackBack: 20
      },
      'darthMaul': {
        name: 'Darth Maul',
        health: 180,
        attack: 7,
        imageUrl: 'assets/images/darth-maul.jpg',
        enemyAttackBack: 25
      }
    }
  }

  function resetGameState () {
    // resets game state to originals.
    return {
      selectedCharacter: null,
      selectedDefender: null,
      enemiesLeft: [],
      numAttacks: 0
    }
  }

  /* RENDERING */
  function renderCharacterSelect () {
    // iterate through characters object,
    // render each character to the charactersSelect div
    var keys = Object.keys(characters)
    for (var i = 0; i < keys; i++) {
      // get the current character out of the object
      var currentObj = characters[keys[i]]
      // append elements to the body so it looks ok.
      // need to add a data attribute to make sure we can back-reference.
    }
  }

  function renderOpponents () {
    // iterate through opponents array
    // render each opponent to the opponentsSelect div.
    // this function will be called after the player is selected, and
    // will be data driven based on the enemiesLeft.
    for (var i = 0; i < gameState.enemiesLeft.length; i++) {
      var enemyKey = gameState.enemiesLeft[i]
      var enemyData = characters[enemyKey]
      // use enemyData to append to dom.
    }
  }

  /* CLICK HANDLERS */

  /*
   * HOMEWORK INSTRUCTIONS: When the game starts, the player will choose a character
     by clicking on the fighter's picture.
     The player will fight as that character for the rest of the game.
  */

  $().on('click.playerSelect', function () {
    // store selected character in javascript
    gameState.selectedCharacter = this.attr('data-name')
    console.log('player selected')
    /*
      HOMEWORK INSTRUCTIONS: Enemies should be moved to a different area of the screen.
    */
    // to do this, add all characters that are NOT the currently selectedCharacter
    // to the "enemiesLeft" list in gameState.
    var keys = Object.keys(characters)
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== this.attr('data-name')) {
        gameState.enemiesLeft.push(keys[i])
      }
    }
    // then call renderOpponents and enable enemySelection:
    renderOpponents()
    enableEnemySelection()
  })

  /*
  *
    HOMEWORK INSTRUCTIONS: The player chooses an opponent by clicking on an enemy's picture.
  */
  function enableEnemySelection () {
    // using .one because I only want this to happen one time.
    // player should not be able to select multiple enemies.
    $().one('click.enemySelect', function () {
      console.log('opponent selected')
      gameState.selectedDefender = this.attr('data-name')
    /*
    * HOMEWORK INSTRUCTIONS: Once the player selects an opponent,
      that enemy is moved to a `defender area`.
       The player will now be able to click the `attack` button (show attack button)
    */
    })
  }

  $().on('click.attack', function () {
    console.log('attack clicked')
    attack()
    defend()
    console.log('player stats are: ', gameState.selectedCharacter)
    console.log('defender stats are: ', gameState.selectedDefender)

    // logic to check if defender or players are dead.
    if (isCharacterDead(gameState.selectedCharacter)) {
      // you lose!
      console.log('you lose')
      // display lose message to user, and present reset button.
    } else if (isCharacterDead(gameState.selectedDefender)) {
      console.log('defender dead')
      // remove defender from enemiesList;
      var indexToRemove = enemiesList.indexOf()
      gameState.enemiesList.splice(indexToRemove, 1)

      if (isGameWon()) {
        console.log('you win!')
        // display reset button and any reset messages.
      } else {
        console.log('there are still enemies left, select another')
        enableEnemySelection()
      }
    } else {
      // display stats to user
      // something like "you hit for 123" and defender countered with "234"
    }
  })

  $().on('click.reset', function () {
    console.log('resetting game')
    reset()
    // hide any reset messages that may be displayed.
  })

  function attack () {
    console.log('attacking defender')
    // increment numAttacks counter
    gameState.numAttacks++
    // The opponent will lose `HP` (health points).
    gameState.selectedDefender.health -= gameState.selectedCharacter.attack * gameState.numAttacks
    // These points are displayed at the bottom of the defender's picture.
  }

  //  HOMEWORK INSTRUCTIONS: The opponent character will instantly counter the attack.
  function defend () {
    console.log('defender countering')
    // HOMEWORK INSTRUCTIONS: the selectedCharacter will lose HP
    gameState.selectedCharacter.health -= gameState.selectedDefender.enemyAttackBack
    // HOMEWORK INSTRUCTIONS:These points are shown at the bottom of the player character's picture.
  }

  // returns boolean if the passed character is dead
  function isCharacterDead (character) {
    console.log('checking if player is dead')
    return character.health <= 0
  }

  // checks if you won
  function isGameWon () {
    console.log('checking if you won the game')
    return gameState.enemiesLeft.length === 0
  }
})
