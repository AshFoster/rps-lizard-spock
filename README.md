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

Images were only used to represent the player's and computer's hands, those being: rock, paper, scissors, lizard or spock. The chosen images used within the game came from [Tony Florida's](https://tonyflorida.com/rock-paper-scissors-lizard-spock-rules/) website, found with a google search. The images looked different from others I had seen; I liked this so decided to use them. I cropped them all, changed the angles, and made their backgrounds transparent.

#### Colour Scheme

The colour scheme used was partly influenced by the colour of the [images](#imagery) chosen which are yellow (#ffdc5d). I put this colour into [Adobe's Colour Wheel](https://color.adobe.com/create/color-wheel) and found a nice contrasting blue (#4254ff). This colour was used throughout the site including for the main menu buttons and difficulty toggle, the rules and quit buttons, the rules and quit modals, and the player and computer selections backgrounds. A lighter blue (#4288e4) was used as a border around all of these elements, too.

The heading text is coloured with a dark shade of grey (#525250) and has a border that is a slightly ligher shade of grey (#747474). This combo works well as it seems to make the text stand out without being overpowering.

The difficulty toggle background colour is a very light grey (#efefef) with a darker, but still light, grey border (#ccc). Although light, the grey still stands out against the white background, but doesn't take away the effect of the blue toggle selector in front of it. The text is white when covered by the blue toggle switch and black when not covered. The text colour changes when the toggle switches from one to the other.

The main background colour of the website is white. All text that sits on top of the white background - other than that already mentioned above - is black. The icons the user uses to select their hand are also black. Where the background is blue, the text is white.

All of the colours mentioned above can be seen in the following images:

![Website's Colours 1](assets/images/colour-scheme1.jpg)
![Website's Colours 2](assets/images/colour-scheme2.jpg)

#### Typography

For my typography choices I used [Google Fonts](https://fonts.google.com/?sort=popularity) which I sorted by popularity to give me an idea of some fonts that are likely to work well across a number of websites.

I then selected the ones that stood out the most to me. The fonts I chose are as follows:

Quantico - This is used for the H1 element that says Rock Paper Scissors.

Orbitron - This is used for the H1 element that says Lizard Spock. 

Poppins - This is used for all other text.

Each of them are of the font category Sans Serif which is the font used as a fallback if for any reason the specified font isn't available.

#### Iconography

[Font Awesome](https://fontawesome.com/) was used for the Rock, Paper, Scissors, Lizard and Spock icons that the user clicks on to make their selection each turn. The same icons are also shown on the rules modal to tell the user what each of them represents. These icons were chosen because they are simple, recognisable, and easy to work with.

## Features

### Existing Features

- __Heading__

  - The heading is at the top of the page and its state is dependent on which section is showing at the time. When the main menu section is showing it contains both "Rock Paper Scissors..." and "...Lizard Spock", but only shows the relevant heading when playing the classic version or the lizard spock version of the game.
  - Its purpose is to immediately let the user know that they're on a rock paper scissors lizard spock game website, and also to show them which version of the game they're currenlty playing when doing so.
  
  ![Heading](assets/images/heading.jpg)

- __Main Menu Area__

  - The main menu area contains two buttons: one to play the classic version and the other to play the lizard spock version of the game. It also contains a toggle selector switch which is used to select the difficulty of the game.
  - Its purpose is to allow the user to select which version of the game they'd like to play, and what difficulty level they'd like to play it on.

  ![Main Menu Area](assets/images/main-menu-area.jpg)

- __Main Area__

  - The main area contains all of the in game elements. Those being:
    1. After turn message - Initially says "Let's Go!", and then updates after each turn to say who won or if it is a draw. Its purpose is to let the player know the outcome of each turn.
    2. Game animation area - Contains images of the player's and computer's hands. Before the first turn of the game they're both an image of the rock symbol, and then once the player has selected their hand an animation is displayed before showing what hands were chosen. Its purpose it to provide the player with a visual representation similar to that of playing the game in real life.
    3. Scores area - This simply displays the score of the game, intially being 0-0. The aim here to is to allow the player to keep track of the score.
    4. Icon selection area - This area contains icons of the available hands that the player can choose for their turn. If playing classic only rock, paper, and scissors are shown, and when playing lizard then lizard and spock are also shown. The aim here is to make it easy for the player to play their selected hand.
    5. Button area - Two buttons are contained within this area. One that displays the rules of the game, and the other that allows the player to quit the game. Its aim is to allow the player to see the rules or to quit the game. 

  - The image below shows all of these areas from top to bottom.

    ![Main Area](assets/images/main-area.jpg)

- __Rules Modal__

  - The rules modal is displayed when the rules button is clicked on. It firstly shows what each symbol represents, and then shows which symbols beat which symbols.
  - The aim of the rules modal is to allow the player to see what the rules of the game are whether they're completely new to it or just need a refresh.

  ![Rules Modal](assets/images/rules-modal.jpg)

- __End Game Modal__

  - The end game modal is displayed when the player clicks on the quit button. It asks the player whether or not they actually want to quit. It has two buttons, yes and no.
  - The aim of the end game modal is to allow the player the chance not to quit in case they clicked on the quit button by accident or if they have changed their mind suddenly.

  ![End Game Modal](assets/images/end-game-modal.jpg)




