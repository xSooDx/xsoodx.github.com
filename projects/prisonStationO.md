---
layout: post
title: "Prison Station O"
---

Made for the [Ludum Dare #47 Game Jam](https://ldjam.com/events/ludum-dare/47/prision-station-o) in the theme of "Stuck in a Loop", Prison Station O is a frantic resource management game that takes place on a loop/torus space prison.

The idea of the game is that you are stuck on a rotating wheel space station that uses centripetal acceleration to simulate artificial gravity. You are doomed to spend the rest of your life repetitively sustaining yourself and repairing the station as it floats through space.

<video autoplay muted loop class="post-video center" width="800">
      <source src="/assets/media/pso_esrr_vid.mp4" type="video/mp4">
</video>

To survive, you must consume food from the farming system and deposit your waste at a excrement recycling system, which in-turn is used to grow more food. Don't forget to sleep before you perish from exhaustion. You also need to constantly repair hull breaches and the station's sub systems that fail over time.

The life-support system supplies oxygen to the station that can escape during a hull breach. The if the communication system fails for more than 30 seconds, the station will self-destruct.If the power system fails, all other systems stop functioning.

<video autoplay muted loop class="post-video center" width="800">
      <source src="/assets/media/pso_gameplay.mp4" type="video/mp4">
</video>

The game was built using the Unity game engine and uses 3D graphics for visuals, but is essentially a 2D game under the hood. The station itself was modelled using Blender.

To achieve the effect of centrifugal simulated gravity, the player walks on the inside of a 2D edge collider in the shape of a circle.

I created a Station Damage Management system to randomly trigger hull breaches and system failures. Occasionally, there will be a station wide malfunctions causing all stations to quickly break down.

[![itch.io Store Link](/assets/media/itch-store-badge.svg)](https://xsoodx.itch.io/prison-station-o){:class="store-badge"}