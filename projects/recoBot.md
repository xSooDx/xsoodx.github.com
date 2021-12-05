---
layout: post
title: "Game Recommendation Chat Bot"
---

This was a project I built for my Advanced Web Technologies course. I chose to build a recommendation engine to suggest games based on the user's profile.

To fuel the engine, I scraped the games catalogue from [store.steampowered.com](https://store.steampowered.com) to get publishing data of over 28,000 games. Using this I created keyword index's and similarity metrics between games, storing the 10 most similar games in an SQL Database. Similarity was measured using common tags, genres and sentiment, weighted by the game's ratings. I also used a [dataset of over 200,000 entries](https://www.kaggle.com/tamber/steam-video-games) of user play time data to create a user-product matching metric.

Steam Store Data Snippet
```json
{"url": "http://store.steampowered.com/app/320/HalfLife_2_Deathmatch/", "reviews_url": "http://steamcommunity.com/app/320/reviews/?browsefilter=mostrecent&p=1", "id": "320", "title": "Half-Life 2: Deathmatch", "genres": ["Action"], "developer": "Valve", "publisher": "Valve", "release_date": "1 Nov, 2004", "app_name": "Half-Life 2: Deathmatch", "specs": ["Multi-player", "Valve Anti-Cheat enabled", "Includes Source SDK"], "tags": ["Action", "FPS", "Multiplayer", "Shooter", "Sci-fi", "First-Person", "Physics", "Competitive", "Funny", "Co-op", "Adventure", "Atmospheric"], "price": "\u20b9 259", "sentiment": "Very Positive", "early_access": false}
{"url": "http://store.steampowered.com/app/200990/Geneforge_3/", "reviews_url": "http://steamcommunity.com/app/200990/reviews/?browsefilter=mostrecent&p=1", "id": "200990", "title": "Geneforge 3", "genres": ["Strategy", "RPG", "Indie"], "developer": "Spiderweb Software", "publisher": "Spiderweb Software", "release_date": "1 Apr, 2005", "app_name": "Geneforge 3", "specs": ["Single-player"], "tags": ["RPG", "Indie", "Strategy", "Turn-Based Combat", "Isometric", "Turn-Based"], "price": "\u20b9 565", "sentiment": "Positive", "early_access": false}
{"url": "http://store.steampowered.com/app/220/HalfLife_2/", "reviews_url": "http://steamcommunity.com/app/220/reviews/?browsefilter=mostrecent&p=1", "id": "220", "title": "Half-Life 2", "genres": ["Action"], "developer": "Valve", "publisher": "Valve", "release_date": "16 Nov, 2004", "app_name": "Half-Life 2", "specs": ["Single-player", "Steam Achievements", "Steam Trading Cards", "Captions available", "Partial Controller Support", "Steam Cloud", "Includes Source SDK"], "tags": ["FPS", "Action", "Sci-fi", "Singleplayer", "Classic", "Story Rich", "Shooter", "Adventure", "First-Person", "Dystopian", "Atmospheric", "Zombies", "Aliens", "Great Soundtrack", "Silent Protagonist", "Physics", "Multiplayer", "Horror", "Moddable", "Puzzle"], "price": "\u20b9 369", "sentiment": "Overwhelmingly Positive", "metascore": 96, "early_access": false}
{"url": "http://store.steampowered.com/app/3920/Sid_Meiers_Pirates/", "reviews_url": "http://steamcommunity.com/app/3920/reviews/?browsefilter=mostrecent&p=1", "id": "3920", "title": "Sid Meier's Pirates!", "genres": ["RPG"], "developer": "Firaxis Games", "publisher": "2K Games", "release_date": "11 Jul, 2005", "app_name": "Sid Meier's Pirates!", "specs": ["Single-player"], "tags": ["Pirates", "Open World", "RPG", "Adventure", "Naval", "Singleplayer", "Historical", "Sailing", "Sandbox", "Economy", "Strategy", "Remake", "Classic", "Action", "Exploration", "Trading", "Atmospheric", "Fighting", "Choose Your Own Adventure", "Difficult"], "price": "\u20b9 499", "sentiment": "Very Positive", "metascore": 88, "early_access": false}
{"url": "http://store.steampowered.com/app/700610/DungeonGOGO/", "reviews_url": "http://steamcommunity.com/app/700610/reviews/?browsefilter=mostrecent&p=1", "id": "700610", "title": "DungeonGOGO", "genres": ["Action", "Indie"], "developer": "David Sof", "publisher": "David Sof", "release_date": "24 Sep, 2017", "app_name": "DungeonGOGO", "specs": ["Single-player", "Steam Achievements", "Partial Controller Support"], "tags": ["Indie", "Action", "Platformer", "2D", "Difficult"], "price": "\u20b9 58", "sentiment": "1 user reviews", "early_access": false}
{"url": "http://store.steampowered.com/app/1500/Darwinia/", "reviews_url": "http://steamcommunity.com/app/1500/reviews/?browsefilter=mostrecent&p=1", "id": "1500", "title": "Darwinia", "genres": ["Indie", "Strategy"], "developer": "Introversion Software", "publisher": "Introversion Software", "release_date": "14 Jul, 2005", "app_name": "Darwinia", "specs": ["Single-player"], "tags": ["Strategy", "Indie", "RTS", "Singleplayer", "Retro", "Story Rich", "Action", "Top-Down"], "price": "\u20b9 369", "sentiment": "Mostly Positive", "metascore": 84, "early_access": false}
```

User Play Time Data Snippet
```
151603712,"Fallout 4",play,87.0,0
151603712,"Spore",purchase,1.0,0
151603712,"Spore",play,14.9,0
151603712,"Fallout New Vegas",purchase,1.0,0
151603712,"Fallout New Vegas",play,12.1,0
151603712,"Left 4 Dead 2",purchase,1.0,0
```

The recommendation engine was written as a web service using Python Flask and an SQL database. I made a simple chat bot interface as a client to query the engine for recommendations. The app also stores user profiles, and takes the user's preferences and previously played games into account before making a suggestion. 

![Chat Bot](/assets/media/op_recoBot.jpg){: .vert-sq}



[![Github Link](/assets/media/github-badge.png)](https://github.com/xSooDx/GameRecommenderChatBot){:class="store-badge"}