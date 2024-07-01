---
layout: default
modal-id: 6
date: 2023-11-20
img: submarine.png
alt: image-alt
project-date: November 2023
client: Start Bootstrap
category: Haskell Functional Programming
description: A Domino Game using Haskell
---

# Technologies Used

 Haskell

# Features

**DomsMatch:** A Haskell implementation to play a dominoes match between two players.

The top-level function is `domsMatch`, which takes five arguments:
 `games`: Number of games to play
 `target`: Target score to reach
 `player1`, `player2`: Functions representing the two players (`DomsPlayer`)
 `seed`: Integer to seed the random number generator

The function returns a pair showing how many games were won by each player.

**DomsPlayer Functions:** Functions must take four arguments:
 `Hand`: Current set of dominos in hand
 `Board`: Current state of the game board
 `Player`: Either P1 or P2
 `Scores`: Current scores of both players

The function returns a tuple containing the domino to play and the end to play it on.

**Author:** Nur Izfarwiza Binti Mohd Talib

**File Contents Summary:**
1. **Scoring Functions:**
    `scoreBoard`: Computes the score for a given board
    `isDouble`: Checks if a domino is a double
    `calculateScore`: Assigns scores based on specific conditions

2. **Game Logic Functions:**
    `blocked`: Checks if there's nothing to play in the hand
    `canPlay`: Checks if a domino can be played on the board
    `playDom`: Plays a domino at a specified end if possible

3. **Player Strategies:**
    `simplePlayer`: Chooses the first valid move from the hand
    `smartPlayer`: Determines the next move based on game state
    `regularMoveStrategy`: Chooses the best move based on scoring strategy

4. **Scoring Strategy Functions:**
    `findBestMove`: Searches for the highest-scoring move
    `listDomino`: Generates a list of possible moves
    `playDominoAtBestEnd`: Determines the best end of the board to play a domino
    `findHighestScoreDomino`: Finds the highest-scoring domino

5. **Helper Functions:**
    `updatePipCountLeft`, `updatePipCountRight`: Updates pip count for board ends
    `isMultThreeFive`: Checks if a move is a multiple of 3 or 5
    `calculateTotalPip`: Calculates score after playing a move

6. **Utility Functions:**
   - `swapDomino`: Swaps elements of a tuple, flipping a domino to be played

# Installation

You would need GHCi installed on your machine, which can be downloaded from [Haskell Platform](https://www.haskell.org/downloads/).

# Usage

1. Open GHCi by typing `ghci` in your terminal.
2. Load your Haskell file using `:load DomsMatch.hs`.
3. Run the match using the `domsMatch` function with specified parameters.

The `domsMatch` function requires:
 Number of games to play
 Initial number of dominos in hand
 Target score
 Two player functions (`simplePlayer` or `smartPlayer`)
 A seed for the random number generator

Experiment with different seeds, hand sizes, and target scores to test various strategies.

![Game Example](https://raw.githubusercontent.com/efamelody/efamelody.github.io/main/_posts/example.png)

# Source Code

Link to the GitHub repository: [DomsMatch](https://github.com/efamelody/DomsMatch)
