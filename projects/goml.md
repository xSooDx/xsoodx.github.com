---
layout: post
title: "Get Off My Lawn"
---

Get Off My Lawn is a uniquely immersive and humorous arcade-style, first-person shooter defense game that utilizes an alternative controller setup. Players will find themselves rocking on a physical rocking chair, gripping a garden hose, and lifting a drink to activate power-ups all in the name of protecting their lawn from those darn neighborhood kids.

The Game was built using Unreal Engine 5 and a Teensy 4.1 micro-controller for the hardware.

I was the hardware engineer and game designer for the project. My goal was to help design the game around a real rocking chair and build the controller's electronics and hardware to synergies with the gameplay.

![Gameplay Gif](/assets/media/goml_gameplay.gif)

#### Hardware

![Rocking Chair Controller](/assets/media/goml_controller.jpg)

The controller's electronics had 3 core parts

- ###### The Garden Hose
    Used as a pointing input device used to aim and spray water in game when the trigger was pulled. The hose used an IR camera to detect infrared LEDs placed around the display to determine a cursor's position on screen.
- ###### The Drink and Drink Holder
    The Drink needs to be picked up for a duration to activate a power-up in game. Initially I used an RFID sensor and chip to detect when the drink was placed in the holder. However this proved too unreliable in the long run. I swapped it out for a LED and light sensor setup. The drink would block the light when placed in the holder. This was much simpler and more robust for gameplay.
- ###### The Rocking Detector
    Rocking the chair keeps your character awake in game. I used an ultra sound sensor strapped to the base of the rocking chair to detect rocking by measuring the change in distance to the floor.

To build the cases and housing for all the electronics, I designed cases using Fusion 360 and 3D printed them.

I used a Teensy 4.1 micro-controller as the brains for whole controller. I programmed it in C++ to read data from all the sensors and used a custom protocol for the game to communicate with Unreal Engine 5 and control the game. I also wrote the drivers in Unreal Engine to read from the controller and pass the inputs into the game.

<video autoplay muted loop class="post-video" width="800">
    <source src="/assets/media/goml_assembly.mp4" type="video/mp4">
</video>

#### Design

The creative and artistic direction of our game was guided by two game design pillars: 'light-heartedness' and 'dumb fun.' Our aim was to create an experience that not only delivers enjoyable and quick to learn gameplay but also elicits laughter through its silly but familiar premise and entertaining interactions within the game.
We wanted players to feel a genuine sense of attachment to their virtual property, experiencing satisfaction when successfully repelling all threats. To add to this satisfaction, we fully embrace the cartoon style and have interactions completely blown out of proportion. Dozens and dozens of children rush to your lawn for the sole purpose of destroying it, your hose is powerful enough to send intruders flying away, and the entire visual style of the game is bright and cartoony.

The seemingly relaxed premise of sitting in a rocking chair, sipping a drink, and safeguarding one's lawn conceals the true nature of the game: chaotic and skill-based gameplay. We deliberately designed this juxtaposition to surprise players, infuse humor into the experience, and create a memorable gameplay dynamic.

#### IndieCade Nomination
[![IndieCade Nominee Stamp](/assets/media/IndieCadeNomineeStamp.png)](https://www.indiecade.com/festival-2023/games/)

Get Off My Lawn was nominated for the IndieCade 2023 Live Action award and was showcased live and in person during the IndieCade Night Games 2023 event at the The Music Center, Los Angeles, California. Over 2 nights, more than 200 people played our game and spray those pesky trespassers off of their lawns!

For the event I rebuilt the entire controller from scratch, improving on the previous prototype by building the electronics to be modular and improving the 3D printed parts to be stronger.

#### [Website](https://getofmylawn.wixsite.com/get-off-my-lawn)

#### Gameplay Video

{% include ytEmbed.html link="https://www.youtube.com/embed/Ejr6SL3oj2A?si=_jIHM7f7xZNceQwa" %}

#### Devlog 

{% include ytEmbed.html link="https://www.youtube.com/embed/gYhs-xdHQsY?si=Nz22bTaak1VXRtvY" %}

#### IndieCade Interview
{% include ytEmbed.html link="https://www.youtube.com/embed/Cbzxmn0uGdU?si=WpfUdJwqqS4lizU0" %}

#### Credits

###### - [Awani Sheke](https://awani_27.artstation.com/) - Environment Artist
###### - [Christopher Jones](https://mistah-jones.github.io/) - Designer, Engineer
###### - [Deniece Radford](https://nieceyx.github.io/portfolio/) - Designer
###### - [Jessy/Jingru Tang](https://artbird.cc/) - 2D & UI Artist
###### - [Landon Beaty](https://landonb4.artstation.com/) - Character & Prop Artist
###### - [Marc-Julian Galicha](https://mjswork.space/) - Producer
###### - [Saurabh Sood](https://xsoodx.github.io/) - Hardware Engineer, Designer
###### - [Shubham More](http://www.codemoregames.com/) - Engineer
###### - [William Rockwell](https://rahlmua.itch.io/portfolio) - Engineer
###### - [Ziyue/Sandy Sang](https://www.sandysang.com/) - Tech Artist

![Get Off My Lawn Team](/assets/media/goml_team.jpg)

