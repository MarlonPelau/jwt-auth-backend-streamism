-- db/seed.sql
\c jwt_auth

INSERT INTO streamers (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());
('Code418', '$2b$10$sCV/FAzVVD6JtYKpnTiDuO4.POCLg8tKRbo3uSflGJRHKMXsuODnK', 'code418@example.com', NOW(), NOW());

INSERT INTO platforms (name, image, rated, description, mo, link) 
VALUES 
('Spotify', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712696255/Streamism-Spotify_auesog.png', 9, 'The king of the hill when it comes to popularity, functionality and being such trendsetters, Spotify has set the bar high and if any other streaming platform can improve on what they already offer or add more unique options, they have something very special. Spotify may also carry the most engaged podcast shows across the globe!', '"streamlining music access and discovery through personalized recommendations with a vast library."', 'https://open.spotify.com/'),
('Apple Music', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712697338/Streamism-AppleMusic_i9vkzc.png', 9, 'If you are a part of the Apple ecosystem (who is not these days?), this is a no brainer, as this platform prioritizes exclusivity and curated content. But if you are not, this is still one very popular music platform that attracts the lovers of anything from pop, current trend and underground trendsetters like Soulection Radio. Celebrity podcasts included, keep up with the times people.', '"integrating music streaming seamlessly into the Apple ecosystem"', 'https://music.apple.com/us/browse'),
('Soundcloud', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712697586/Streamism-Soundcloud_cdepch.png', 10, 'Undoubtedly the best music platform iso (in streamism opinion), fostering a community-driven platform for discovery and collaboration. With their creativity displayed through their Creative Commons, a freedom of new production genres have been literally created through more savvy flips, mash-ups and edits, bypassing traditional, limited licensed remixes.', '"empowering independent artists to share their music directly with a global audience"', 'https://soundcloud.com/discover'),
('Tidal', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712697891/Streamism-Tidal2_erigfi.png', 8, 'Tidal pride themselves on not only their exclusive content, and supporting audio quality standards, but once launched as Black-owned with Jay-Z leading the marketing reach towards the urban slice of the streaming pie. The quality of their music videos, and unique visual content for paying subscribers is superior to most others.', '"providing high-fidelity music streaming with an emphasis on artist ownership"', 'https://tidal.com/'),
('Amazon Music Unlimited', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712698109/Streamism-AMU_w81rud.png', 6, 'Offering a vast library of songs and prioritizing convenience for Prime members, ahhh, we are not big fans, sorry. Something hints to a soccer mom, maybe perfectly fit for a user not too engaged or engrossed with music other than what is already on the surface, aka pop world of contemporary, predictable, mass listenership tastes.', '"seamlessly integrating music streaming into the Amazon ecosystem"', 'https://music.amazon.com/'),
('Deezer', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712698295/Streamism-Deezer_zkboks.png', 7, 'Personalized recommendations and global accessibility, Deezer has a draw because of their unique capacity to allow mp3 uploads, though with varying limitations based on paid users and non-mobile devices.', '"providing a diverse music streaming experience with a focus on curated playlists"', 'https://www.deezer.com/us/'),
('Pandora', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712770093/Streamism-Pandora3_hulbmo.png', 5, 'Besides Pandora Music being free, or introducing streamers to new artists and songs through algorithmic recommendations, Pandora does not offer much more than what others already do much better, iso of course. Sometimes being among the first has no relevance in being even close to the best.', '"offering personalized radio stations based on user music preferences"', 'https://www.pandora.com/'),
('SiriusXM', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712699363/Streamism-SiriusXm_aqqyci.png', 8, 'Wait, you can pause and rewind content? That stands out! In addition to music channels, SiriusXM thrives in the world of live sports, news, and entertainment content through satellite radio subscription services, and offer listeners diverse programming options and exclusive content. Their free 3-month trial period is legit!', '"providing a wide range of curated music channels"', 'https://www.siriusxm.com/'),
('YouTube Music', 'https://res.cloudinary.com/dgifdj6nx/image/upload/t_Profile/v1712700408/Streamism-YTMusic5_gcfr7i.png', 9, 'YouTube Music offers streamers access to official tracks, search-by-lyrics functionality, remixes, covers, video game soundtracks and music videos alongside personalized playlists and recommendations, at ease.', '"integrating music streaming with the vast content library of YouTube"', 'https://music.youtube.com/'),


INSERT INTO reviews(streamer_id, platform_id, content, rating, created_at, updated_at)
VALUES
(1, 3, 'Is 5 the maximum rating for this platform?! Willing to give it more!', 5, '2023-04-01', null),
(1, 7, 'I gave it a try but onto the next, not my cup of tea.', 2, '2024-04-06', null),
(1, 4, 'The quality is flawless - videos or/and audio.', 5, '2024-01-14', null),
(1, 5, 'A prime example of what platform to avoid, no pun intended!', 3, '2023-05-23', null),
(1, 9, 'Easy to find songs I only remember partially by searching with lyrics, wow!', 5, '2023-11-28', null),
(1, 1, 'Functional and connected to Shazam, exactly what I needed.', 5, '2023-11-16', null),
(2, 6, 'I was misled about uploading whole songs from my music catalog, shame!', 3, '2023-05-16', null),
(2, 1, 'Who knew they gave concert recommendations based on near your location? Nice!', 4, '2024-01-17', null),
(2, 8, 'Nothing to lose if you try their free, 3-month subscription..', 4, '2022-05-14', null),
(2, 2, 'Only because of their live Soulection Radio sessions, iz my go-to platform.', 5, '2023-07-29', null),
(2, 7, 'I would never pay to use this platform, just being honest.', 2, '2023-04-18', null),
(2, 9, 'I have 100% trust in their Search tool to find any song I need to hear, or video if available.', 5, '2023-08-06', null);