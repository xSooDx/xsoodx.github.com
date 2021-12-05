---
layout: post
title: "Block Bounce"
---

As an onboarding project during my first month at Moonfrog Labs I was tasked with creating any game with a backend server using their tech stack - Cocos2D-x, NodeJS, Express and MongoDB. I decided to create Block Bounce, a Doodle Jump Clone with enemy Bouncers, and a backend server for login and leaderboards in the backend. Reach as high as you can while killing as many Bouncers as possible to get the best scores.

The game gets harder the higher you go, with fewer and breakable platforms and more Bouncers. While Bouncers don't actively try to attack you, they can bounce off of you and kill you. The Bouncer AI uses box-collision checks to locate the nearest reachable platform to bounce to.

<div class="center">
    <video autoplay muted loop class="post-video-tall" width="800">
        <source src="/assets/media/blockbounce_gameplay.mp4" type="video/mp4">
    </video>
</div>


[![itch.io Store Link](/assets/media/itch-store-badge.svg)](https://xsoodx.itch.io/block-bounce){:class="store-badge"}