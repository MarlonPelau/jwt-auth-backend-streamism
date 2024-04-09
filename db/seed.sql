-- db/seed.sql
\c jwt_auth

INSERT INTO streamers (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());
('Code418', '$2b$10$sCV/FAzVVD6JtYKpnTiDuO4.POCLg8tKRbo3uSflGJRHKMXsuODnK', 'code418@example.com', NOW(), NOW());

INSERT INTO platforms (name, image, rated, description, mo, link) 
VALUES 
('Spotify', '?', 9, '?.', '"streamlining music access and discovery through personalized recommendations with a vast library."', 'https://open.spotify.com/'),
('Apple Music', '?', 9, '?.', '"integrating music streaming seamlessly into the Apple ecosystem"', 'https://music.apple.com/us/browse'),
('Soundcloud', '?', 10, '?.', '"empowering independent artists to share their music directly with a global audience"', 'https://soundcloud.com/discover'),
('Tidal', '?', 8, '?.', '"providing high-fidelity music streaming with an emphasis on artist ownership"', 'https://tidal.com/'),
('Amazon Music Unlimited', '?', 6, '?.', '"seamlessly integrating music streaming into the Amazon ecosystem"', 'https://music.amazon.com/'),
('Deezer', '?', 7, '?.', '"providing a diverse music streaming experience with a focus on curated playlists"', 'https://www.deezer.com/us/'),
('Pandora', '?', 5, '?.', '"offering personalized radio stations based on user music preferences"', 'https://www.pandora.com/'),
('SiriusXM', '?', 8, '?.', '"providing a wide range of curated music channels"', 'https://www.siriusxm.com/'),
('YouTube Music', '?', 9, '?.', '"integrating music streaming with the vast content library of YouTube"', 'https://music.youtube.com/'),


