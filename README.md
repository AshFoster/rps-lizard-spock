# Rock Paper Scissors Lizard Spock Game

## Contents

## Overview

This is a web based rock paper scissors game which includes an additional lizard spock version. The user can play either game, both of which can be played on easy or hard difficulties. It has been designed to be fun, easy to pick up and play, and to be responsive across a range of popular devices.

## User Experience

The five planes of user experience were considered during the design phase of this website, which are all outlined below.

### Strategy Plane

Here, the user goals are considered and outlined with the aim of having a clear understanding of what thought process users of the site are likely to go through, and what they might expect from the website. 

The aim being to provide ideas for potential features for the website.

#### User Goals
  - __As a user I would like:__
      - to play a game based on chance.
      - to easily navigate across the website and have lots of feedback.
      - the website to be visually appealing and have no colour clashes.
      - to be able to read about the rules of the game.
      - to have a choice of difficulty levels.

### Scope Plane

All of the user goals outlined in the strategy plane all seem to be plausible for the first release of the website. For this reason there is not too much to consider in terms of further scope, and the plan is to implement all of the above mentioned goals and outcomes.

### Structure Plane

The idea is to keep the site all on one page, but to have a couple of sections - a main menu section and main area section - which are never visible at the same time. The site loads with the main menu section visible, which dissapears once a game has been selected; the main area section then being visible instead.

Both sections have a heading saying Rock Paper Scissors... ...Lizard Spock. 

The main menu section has two buttons: one for classic and the other for lizard spock, and also a toggle button to choose between easy or hard difficulties.

The main area section contains the following:
- After turn message - to state the outcome after each turn.
- A game animation area to contain images of the player's and computer's hands. 
- A score area to keep track of the score.
- An icon area used by the user to select their hand.
- A button area containing two button: one to show the rules and the other to quit the game.

Originally the plan was to show the rules in a footer section at the bottom of the game screen. This can be seen in the [wireframes](#wireframes)) below. This idea was discarded during the development process in order to allow for more screen space for the game itself.

The rules button displays a modal with the rules for the game currently being played (classic or lizard).

The quit button displays a modal which asks the user to confirm whether or not they'd actually like to quit.

These are all outlined in more detail in the [Features](#features) section below.

