---
layout: post
title: "Deep Q-Learning for Space Invaders"
---

My friends and I created this project for the Advanced Machine Learning Course at PES University.

We used OpenAI's gym environment to run an instance of Space Invaders, that provided game state and reward data, to train my model on via reinforcement learning. Using Keras, I created a convolutional neural network to use for deep Q-learning and trained the model for about 6 hour.

The network architecture was inspired by my internship where I used "Inception Modules" from Google's Inception Network for Image Classification.

Below you can see the results before and after training. The agent stops working some time after the shields are destroyed. This is probably due to a lack of training in this phase of the game. With more training time and tweaking the network's architecture, the model could have easily learnt to beat the game.

##### Before Training
<video autoplay muted loop class="post-video">
      <source src="/assets/media/si_random_vid.mp4" type="video/mp4">
</video>

##### After Training
<video autoplay muted loop class="post-video">
      <source src="/assets/media/si_trained_vid.mp4" type="video/mp4">
</video>


##### Credits
- Nishant Bhattacharya
- Saurabh Sood    		  
- Srinidhi Sridhar

[![Github Link](/assets/media/github-badge.png)](https://github.com/xSooDx/AMLproject){:class="store-badge"}     