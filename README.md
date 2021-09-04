# Rock Paper Scissors Lizard Spock Game

[Click here to view the live site.](https://ashfoster.github.io/rps-lizard-spock/)

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

Both sections have headings above them, the main menu section saying Rock Paper Scissors Lizard Spock, and the main area section saying either Rock Paper Scissors or Lizard Spock depending on which game is being played.

The main menu section has two buttons: one for classic and the other for lizard spock, and also a toggle button to choose between easy or hard difficulties.

The main area section contains the following:
- After turn message - stating the outcome after each turn.
- A game animation area containing images of the player's and computer's hands. 
- A score area to keep track of the score.
- An icon area used by the player to select their hand.
- A button area containing two buttons: one to show the rules and the other to quit the game.

Originally the plan was to show the rules in a footer section at the bottom of the game screen. This can be seen in the [wireframes](#wireframes)) below. This idea was discarded during the development process in order to allow for more screen space for the game itself.

The rules button displays a modal with the rules for the game currently being played (classic or lizard).

The quit button displays a modal which asks the user to confirm whether or not they'd actually like to quit.

These are all outlined in more detail in the [Features](#features) section below.

### Skeleton Plane

#### Wireframes

Wireframes were created for mobiles, tablets, and desktops using [Balsamiq](https://balsamiq.com/).

For each device type there are three wireframes: Main Menu, Classic Screen, and Lizard Spock Screen.

Here are links to each of them:

- [Mobile - Main Menu](assets/wireframes/mobile-menu.pdf)
- [Mobile - Classic Screen](assets/wireframes/mobile-classic.pdf)
- [Mobile - Lizard Spock Screen](assets/wireframes/mobile-lizard.pdf)
- [Tablet - Main Menu](assets/wireframes/tablet-menu.pdf)
- [Tablet - Classic Screen](assets/wireframes/tablet-classic.pdf)
- [Tablet - Lizard Spock Screen](assets/wireframes/tablet-lizard.pdf)
- [Desktop - Main Menu](assets/wireframes/desktop-menu.pdf)
- [Desktop - Classic Screen](assets/wireframes/desktop-classic.pdf)
- [Desktop - Lizard Spock Screen](assets/wireframes/desktop-lizard.pdf)

### Surface Plane

#### Imagery

Images were only used to represent the player's and computer's hands, those being: rock, paper, scissors, lizard or, spock. The chosen images used within the game came from [Tony Florida's](https://tonyflorida.com/rock-paper-scissors-lizard-spock-rules/) website, found with a google search. The images looked different from others I had seen; I liked this so decided to use them. I cropped them all, changed the angles, and made their background's transparent.

