// Execute this code when the DOM has fully loaded.
$(document).ready(function () {
  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters, gameState

  /* RESET FUNCTIONS */

  // startGame acts as primary reset function. it is called at the bottom of the file
  // to kick the game off.
  function startGame () {
    // resets the game to original state;
    characters = resetCharacters()
    gameState = resetGameState()

    // renders characters
    renderCharacters()
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
      enemiesLeft: 0,
      numAttacks: 0
    }
  }

  /* RENDERING */

  // helpful for creating dynamic divs
  function createCharDiv (character, key) {
    var charDiv = $("<div class='character' data-name='" + key + "'>")
    var charName = $("<div class='character-name'>").text(character.name)
    var charImage = $("<img alt='image' class='character-image'>").attr('src', character.imageUrl)
    var charHealth = $("<div class='character-health'>").text(character.health)
    charDiv.append(charName).append(charImage).append(charHealth)
    return charDiv
  }

  // renders all characters in character-section to start
  function renderCharacters () {
    console.log('rendering characters')
    // iterate through characters object,
    // render each character to the charactersSelect div
    var keys = Object.keys(characters)
    for (var i = 0; i < keys.length; i++) {
      // get the current character out of the object
      var characterKey = keys[i]
      var character = characters[characterKey]
      // append elements to the body
      // need to add a data attribute to make sure we can back-reference.
      var charDiv = createCharDiv(character, characterKey)
      $('#character-area').append(charDiv)
    }
  }

  // renders just the opponents (not the character that was just selected)
  function renderOpponents (selectedCharacterKey) {
    // iterate through oponents object, and render
    // oponent divs for every key that is NOT the selectedCharacter
    var characterKeys = Object.keys(characters)
    for (var i = 0; i < characterKeys.length; i++) {
      if (characterKeys[i] !== selectedCharacterKey) {
        var enemyKey = characterKeys[i]
        var enemy = characters[enemyKey]

        var enemyDiv = createCharDiv(enemy, enemyKey)
        $(enemyDiv).addClass('enemy')
        $('#available-to-attack-section').append(enemyDiv)
      }
    }
  }

  /* CLICK HANDLERS */

  /*
   * HOMEWORK INSTRUCTIONS: When the game starts, the player will choose a character
     by clicking on the fighter's picture.
     The player will fight as that character for the rest of the game.
  */

  // NOTE: the second argument to the on method means this is a "delegated event"
  // that will still trigger for dynamically added elements. The selector in
  // the $ needs to be present when the event is attached in order for event
  // delegation to work.
  $('#character-area').on('click', '.character', function () {
    // store selected character in javascript

    var selectedKey = $(this).attr('data-name')
    gameState.selectedCharacter = characters[selectedKey]
    console.log('player selected')

    // move to selected section
    $('#selected-character').append(this)

    /*
      HOMEWORK INSTRUCTIONS: Enemies should be moved to a different area of the screen.
    */

    $('#characters-section').hide()
    // then call renderOpponents and enable enemySelection:
    renderOpponents(selectedKey)

    // set the number of enemies, and enable enemy selection;
    gameState.enemiesLeft = Object.keys(characters).length - 1
    enableEnemySelection()
  })

  /*
  *
    HOMEWORK INSTRUCTIONS: The player chooses an opponent by clicking on an enemy's picture.
  */
  function enableEnemySelection () {
    $('.enemy').on('click.enemySelect', function () {
      console.log('opponent selected')
      var opponentKey = $(this).attr('data-name')
      gameState.selectedDefender = characters[opponentKey]

      // move enemy
      $('#defender').append(this)
    /*
    * HOMEWORK INSTRUCTIONS: Once the player selects an opponent,
      that enemy is moved to a `defender area`.
       The player will now be able to click the `attack` button
    */
      $('#attack-button').show()
      $('.enemy').off('click.enemySelect')
    })
  }

  $('#attack-button').on('click.attack', function () {
    console.log('attack clicked')
    attack()
    defend()

    $('#selected-character .character-health').text(gameState.selectedCharacter.health)
    $('#defender .character-health').text(gameState.selectedDefender.health)
    // logic to check if defender or players are dead.
    if (isCharacterDead(gameState.selectedCharacter)) {
      // you lose!
      console.log('you lose')
      // display lose message to user, and present reset button.
      $('#selected-character').empty()
      $('#attack-button').hide()
      $('#reset-button').show()
    } else if (isCharacterDead(gameState.selectedDefender)) {
      console.log('defender dead')
      // decrement enemiesLeft counter;
      gameState.enemiesLeft--
      $('#attack-button').hide()
      $('#defender').empty()
      if (isGameWon()) {
        console.log('you win!')
        // Hide attack button, display reset button and any reset messages.
        $('#reset-button').show()
      } else {
        console.log('there are still enemies left, select another')
        $('#defender').empty()
        enableEnemySelection()
      }
    }
  })

  $('#reset-button').on('click.reset', function () {
    console.log('resetting game')
    // empty out other content areas
    $('#selected-character').empty()
    $('#defender').empty()
    $('#available-to-attack-section .enemy').empty()
    $('#character-area').empty()
    $('#characters-section').show()
    startGame()
    // hide any reset messages that may be displayed.
    $('#reset-button').hide()
  })

  function attack () {
    console.log('attacking defender')
    // increment numAttacks counter
    gameState.numAttacks++
    // The opponent will lose `HP` (health points).
    gameState.selectedDefender.health -= gameState.selectedCharacter.attack * gameState.numAttacks
  }

  //  HOMEWORK INSTRUCTIONS: The opponent character will instantly counter the attack.
  function defend () {
    console.log('defender countering')
    // HOMEWORK INSTRUCTIONS: the selectedCharacter will lose HP
    gameState.selectedCharacter.health -= gameState.selectedDefender.enemyAttackBack
  }

  // returns boolean if the passed character is dead
  function isCharacterDead (character) {
    console.log('checking if player is dead')
    return character.health <= 0
  }

  // checks if you won
  function isGameWon () {
    console.log('checking if you won the game')
    return gameState.enemiesLeft === 0
  }

  startGame()
})
