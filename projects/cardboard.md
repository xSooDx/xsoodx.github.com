---
layout: post
title: "Cardboard Chronicles (Work in progress)"
---

This is my current thesis project for my Master's in Entertainment Arts & Engineering at the University of Utah. We are building a warm hearted puzzle-adventure game with a unique art style of everything being made out of cardboard. We are targeting a release on the Nintendo Switch, utilizing Unreal Engine.

Leading a team of 13, my role covers several responsibilities such as engineering, design, feature pipeline manager and asset integration.

##### UE5 Game Prototype

We came up with an initial prototype in 2 weeks using UE 5.1 that got us greenlit for the next phase of full development (currently in progress). Our prototype had a few simple mechanics. The player could slam in 4 directions to attack enemies, or could slide under enemies to fling them. During the prototype we established our unique cardboard art style,as well as the core pillars of our game:
- Keep it Simple
- Keep it playful
- Keep it Cardboard

However, to build for Switch compatibility, we had to migrate to UE 4.27. We spent about a month porting our prototype into the new engine and C++.

![](/assets/media/cardboard_prototype.gif)


##### Procedural Terrain Generator

I built a terrain generator to create topographical layered cardboard style hills. I used unreal's spline and procedural meshes to allow artists to easily use the tool.

![](/assets/media/cardboard_terraingen.gif)

##### Combat & Enemy Design
I prototyped some basic enemies that slam down at you to damage you. They waddle around like stiff cardboard, chasing you till they attack and then run away.
I then fleshed out the basic enemies and also designed a new enemy that throws bombs at you that you can slam back at them. These were ported and built by another engineer on our team.

![](/assets/media/cardboard_combat.gif)

##### Dialogue System
After we moved to UE4, I worked on creating a dialogue system for our game's NPCs that used data assets to store dialogue as sequences of text that could be referenced and played.
A quest marker, generic dialogue marker or no marker can be displayed above the NPC to indicate the presence of a dialogue.

<video autoplay muted loop class="post-video" width="800">
      <source src="/assets/media/cardboard_dialogue.mp4" type="video/mp4">
</video>

##### Boss Fight
I am working on a boss fight against a giant cardboard baler with multiple stages of varying attacks. It uses a state-machine to manage and sequence the various stages.
- Stage 1: It alternates smashing down with a spike ball and a claw. At the end of the stage, the ball arm gets stuck and is vulnerable to be destroyed.
- Stage 2: The ball arm is destroyed and the claw arm begins to attack faster, till it gets stuck and can be destroyed.
- Stage 3: After both arms are destroyed, the boss starts marking targets across the arena and shooting lasers out of it's eyes. Once the lasers are shot the eye becomes vulnerable as it needs to recharge.
- Punish Stage: At each stage, if player fails to destroy the arm or eye, the boss launches an attack with smaller arms that try to grab and harm the player.

<video autoplay muted loop class="post-video" width="800">
      <source src="/assets/media/cardboard_boss.mp4" type="video/mp4">
</video>

##### Feature Pipeline
To manage our game's features, dependencies, scope and quality, I established a pipeline process that we follow as a team to ensure we work efficiently, are able to get feedback and iterate.

![](/assets/media/cardboard_pipeline.png)

I am also in charge of integrating our game's audio, VFX, NPC models and animations.

