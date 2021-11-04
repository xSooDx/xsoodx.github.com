---
layout: post
title: "Grand Theft GPU"
---

Made in 3 days for the AI And Games Jam 2021 in the theme of 'BREAKING THE RULES', **Grand Theft GPU** is a top down stealth game where you need to steal a shipment of GPUs while hiding from swarm drone security system.

The drone security system is made of large *Master drones* that can attack the player, and many smaller *Seeker drones* that recon the area in search of the player. The drones communicate with each other to decide on what actions to take.

The AI for the drones is built using 2 AI techniques
- A finite-state machines for each of the drone types that tells them when to patrol the area, chase and attack the player or search the player's last known position if they manage to evade
- The use of Boids Algorithm to create swarm like behaviour for the Seeker drones


[![itch.io Store Link](/assets/media/itch-store-badge.svg)](https://xsoodx.itch.io/grand-theft-gpu){:class="store-badge"}