## description

War is one of the most, if not the most simple card game.

## development process

I started this game as a fun little project 1-hr project but it turned into a daylong head scratcher.

I made the game loop in a few minutes and I thought I was done tinkering with it, in my mind all that was left was to make some cool visualizations but despite my plan the project made an interesting turn.

After a whole day of debugging and thinking what is wrong with my code I found a paper "cycles in war" (linked below) which goes in depth on the topic of infinite games. I didn't know that at the time so I thought my code was to blame because I have never encountered an infinite game before. The problem is that we put the cards back in the deck without order and my code just put them in the same order every time (in hindsight I should have considered it).



## sources:

[CYCLES IN WAR](https://math.pugetsound.edu/~mspivey/War.pdf)

[RULES OF WAR](https://en.wikipedia.org/wiki/War_(card_game))
