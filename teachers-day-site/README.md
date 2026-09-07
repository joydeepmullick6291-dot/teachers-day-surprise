# Teachers' Day Surprise — GitHub Pages

A single-page, mobile-friendly Teachers' Day website with:
- Animated greeting
- Full-screen-style video section
- Teacher dropdown
- Anonymous funny-message reveal
- No backend required

## Before publishing
1. Open `script.js` and replace `Teacher 1` ... `Teacher 5` with the real teacher names.
2. Replace each example message array with 5–6 short messages for that teacher.
3. Put your video in `assets/teachers-day-video.mp4`.
4. Optional: replace `assets/video-poster.svg` with your own poster image.

## GitHub Pages
1. Create a new GitHub repository, for example `teachers-day-surprise`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. In GitHub, open the repository → **Settings** → **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for the Pages deployment to finish. GitHub will show your public URL.

Anyone with that URL can open the site on a phone, tablet, or computer. No login is required to view it.

## Large video note
If your video file is large, GitHub repository limits may become inconvenient. For a short video, normal upload is often fine. For a large/high-resolution video, use Git LFS or host the video on a public video/CDN service and change the `<source>` URL in `index.html`.
