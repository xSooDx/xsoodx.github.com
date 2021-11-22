---
layout: post
title: "Ship Jam: Unity ML-Agent Ship Combat"
---

As part of the 2021 Summer School for AI and Games, I teamed up with 5 other students from around the globe to take part in the accompanying game jam. 

We wanted to get hands on with Unity's ML Agents Package, We decided to create a 1v1 pirate ship duelling game where you play against an opponent AI that was trained using reinforcement learning. One of our member developed a procedural island generator that we used to create a variety of environments for the agent to train in.

We took 3 different approaches to train the model. My approach was to train the agent by playing against itself. I created 3 environments for it to train in.
- A small map with no island so the agent could learn to fight.
- A small map with 1 or 2 islands so the agent could learn how to navigate the environment.
- A large map with many island for the agent to learn how to play in the real game environment against the player.

The agent had the capability to accelerate/decelerate, steer port/starboard and fire cannons on the port/starboard sides. The ship would always be moving forward as that adds to the challenge of controlling the ship.

The agent used a grid sensor to sense it's surroundings as well as received it's own as well as the opponent's position as input to it's neural network, a simple 2 layer network with 512 hidden units.

The agent was rewarded for closing the distance to the opponent and for hitting the opponent.

The agent was penalized for taking damage and colliding with the environment or map boundaries.

<video autoplay muted loop class="post-video">
      <source src="/assets/media/shipjam_training_vid.mp4" type="video/mp4">
</video>

Out of the 3 approaches we took, mine showed the best results and was used as our final submission for the jam.

While the trained AI was not hard to beat, it still posed a challenge if you attempted to be cocky against it.

<video autoplay muted loop class="post-video">
      <source src="/assets/media/shipjam_gameplay_vid.mp4" type="video/mp4">
</video>

##### Jam Submission Video

<div class="yt-video-holder">
    <iframe class="yt-video" src="https://www.youtube.com/embed/mNmoC6lY2u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

##### Credits:

- Danielk0703
- Thomas Simonini
- George Sidiropoulos
- Saurabh Sood
- Alex Brooke
- Trehan Utkarsh


[![itch.io Store Link](/assets/media/itch-store-badge.svg)](https://danielk0703.itch.io/ship-jam){:class="store-badge"}

[![Github Link](/assets/media/github-badge.png)](https://github.com/Danielk0703/Game-AI-School-2021-AI-Game-Jam){:class="store-badge"}     