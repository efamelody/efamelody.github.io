---
layout: project
title: Domino Game 
date: 2023-11-20 08:00:00 -0400
categories: [projects]
tags: [Haskell, Functional Programming]
---

# Project Name


## Technologies Used

- Haskell

## Features

DomsMatch: code to play a dominoes match between two players.

   The top level function is domsMatch - it takes five arguments:
       games - the number of games to play
       target - the target score to reach
       player1, player2 - two DomsPlayer functions, representing the two players
       seed - an integer to seed the random number generator
   The function returns a pair showing how many games were won by each player.

   The functions of type DomsPlayer must take four arguments:
       The current Hand
       The current Board
       The Player (which will be one of P1 or P2)
       The current Scores
   The function returns a tuple containing the Domino to play and End to play it on.

   Author: Nur Izfarwiza Binti Mohd Talib
   Date: 20 November 2023
   Description:
   Brief Summary of The File Contents:
   1. Scoring Functions:
      scoreBoard: Computes the score for a given board and a boolean indicating if it's the last domino.
      isDouble: Checks if a given domino is a double.
      calculateScore: Assigns scores according to specific conditions.
      Game Logic Functions:
  2. Game Logic Functio
      blocked: Checks if there is nothing to play in the hand.
      canPlay: Checks if a domino can be played on the board.
      playDom: Plays a domino at a specified end if possible.
  3. Player Strategies:
      simplePlayer: Chooses the first valid move from the hand that can be played on the board.
      smartPlayer: Determines the next move based on the current state, considering a special case.
      regularMoveStrategy: Filters possible moves and chooses the best move based on scoring strategy.
  4. Scoring Strategy Functions:
      findBestMove: Recursively searches through possible moves to find the move resulting in the highest score.
      listDomino: Generates a list of possible domino moves.
      playDominoAtBestEnd: Determines the end of the board to play the domino based on scoring strategy.
      findHighestScoreDomino: Recursively searches through a list of dominoes to find the highest-scoring domino
  5. Helper Functions:
      updatePipCountLeft, updatePipCountRight: Updates the pip count for the left/right side of the board.
      isMultThreeFive: Checks if a move is a multiple of 3 or 5.
      calculateTotalPip: Calculates the new score for the player after playing a given move
  6. Utility Functions:
      swapDomino: Swaps the elements of a tuple, flipping a domino to be played.

##Installation

You would need ghci downloaded into you machine which can be downloaded here, https://www.haskell.org/downloads/

## Usage

1. Open GHCi: By typing ghci, you start the Haskell interactive environment.
2. Load your Haskell file: The :load DomsMatch.hs command loads the file into GHCi.
3. Run the Match: Use the domsMatch function to run the game with specified parameters.

The domsMatch function requires:

- The number of games to play in a match.
- The initial number of dominos in a hand.
- The target score.
- The two player functions (simplePlayer or smartPlayer).
- A seed for the random number generator.

You can experiment with different seeds, hand sizes, and target scores to test various scenarios and strategies.
![Game Example](example.png)

## Source Code

Link to the GitHub repository: https://github.com/efamelody/DomsMatch 

