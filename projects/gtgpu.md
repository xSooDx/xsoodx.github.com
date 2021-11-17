---
layout: post
title: "Grand Theft GPU"
---

Made in 3 days for the AI And Games Jam 2021 in the theme of 'BREAKING THE RULES', **Grand Theft GPU** is a top down stealth game where you need to steal a shipment of GPUs while hiding from swarm drone security system.

The drone security system is made of large *Hunter drones* that can attack the player, and many smaller *Seeker drones* that recon the area in search of the player. The drones communicate with each other to decide on what actions to take.

The AI for the drones is built using 3 AI techniques
- A finite-state machines for each of the drone types that tells them when to patrol the area, chase and attack the player or search the player's last known position if they manage to evade
- The use of Boids Algorithm to create swarm like behaviour for the Seeker drones
- A Navigation mesh to ensure that paths taken by the Hunter drone and the Seeker's search targets are valid positions in the game world.

Below you can see all 3 techniques in action

<video autoplay muted loop class="post-video">
      <source src="/assets/media/gtgpu_ai_vid.mp4" type="video/mp4">
</video>

The drones use volume and raycast sensors to detect the player, which triggers them to go into one of three states
- Patrol (white): The default state of the drones to follow the patrol paths. If the player evades detection for more than 5 while the drones are in Search or Hunt states, then the drowns will de-escalate their states.
- Search (yellow): If the player was detected by 2 or less Seekers or at long distance by the Hunter, the drones begin to search the player's last seen position.
- Hunt (red): If the player is detected by more than 2 Seekers or at close range by the Hunter, the Hunter drones actively chase down the player and attempting to kill.

The player has an EMP burst ability that stuns drones to escape sticky situations.

<video autoplay muted loop class="post-video">
      <source src="/assets/media/gtgpu_detection_vid.mp4" type="video/mp4">
</video>

#### Full Gameplay video
<div class="yt-video-holder">
    <iframe class="yt-video" src="https://www.youtube.com/embed/ifEoB8Vvqvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[![itch.io Store Link](/assets/media/itch-store-badge.svg)](https://xsoodx.itch.io/grand-theft-gpu){:class="store-badge"}