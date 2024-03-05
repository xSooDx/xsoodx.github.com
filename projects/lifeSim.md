---
layout: post
title: "Cellular Life Simulation"
---

I created this project of a cellular automata simulation of simple life for my Design Patterns course. It simulates the behavior of plant and animal like organisms, each represented as a colored pixel.

They use chromosomes to decide the attributes of the organisms that undergo random mutation and crossovers during reproduction to simulate the evolution of traits. Each species of animal can only reproduce with it's own kind, and compete against each other for food resources, which are the plants.

<video autoplay muted loop class="post-video-sq center" width="800">
      <source src="/assets/media/cell_sim_vid.mp4" type="video/mp4">
</video>

The design patterns implemented in this project are:
- **Composite Pattern:** To compose world objects using components that define the behavior of the object.

![Composite Pattern UML Diagram](/assets/media/lifesim_composite.jpg)

- **Builder Pattern:** To dynamically assemble objects using multiple components such as a draw component for rendering and specific Animal and Plant components to define the behaviours and reproductive capabilities.

![Builder Pattern UML Diagram](/assets/media/lifesim_builder.png)

- **Abstract Factory:** To create families of organisms and plants that are instantiated for the simulation. The factories internally use the builder to assemble organisms.

![Abstract Factory UML Diagram](/assets/media/lifesim_factory.png)

- **Iterator Pattern:** To iterate through all the world objects to perform simulation actions.

![Iterator Pattern UML Diagram](/assets/media/lifesim_iterator.jpg)

- **Visitor Pattern:** To visit each world object and collect data about the simulation to log it for analysis. 

![Visitor Pattern UML Diagram](/assets/media/lifesim_visitor.jpg)
  
[![Github Link](/assets/media/github-badge.png)](https://github.com/xSooDx/LifeSim2D){:class="store-badge"}     