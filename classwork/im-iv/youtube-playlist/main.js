document.addEventListener('DOMContentLoaded', async () => {
  const playlist_items_count = 7;
  const playlist_id = 'PLzRLCf4AG-7vP7sS08Uzeh4TcGVlQBKnI';

  try {
    const env_respnse = await fetch('env.json');
    if (!env_respnse.ok) {
      throw new Error('Failed to fetch .env file');
    }
    const env_data = await env_respnse.json();

    const api_key = env_data.api_key;
    const playlist_url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${playlist_items_count}&playlistId=${playlist_id}&key=${api_key}`;

    const results = fetch(playlist_url).then((response) => {
      response.json().then((data) => {
        const videoList = document.querySelector('ol#video-list');
        const playerLayer = document.querySelector('#player');
        document.querySelector('#video-loading').remove();
        // console.log(videoList);
        data.items.forEach((item) => {
          const image = document.createElement('img');
          image.src = item.snippet.thumbnails.default.url;
          // anchor
          const anchor = document.createElement('a');
          anchor.href = `#${item.contentDetails.videoId}`;
          anchor.addEventListener('click', () => {
            playerLayer.innerHTML = `<iframe width="100%" src="https://www.youtube.com/embed/${item.contentDetails.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          });
          // add image into anchor
          anchor.appendChild(image);
          // create list item
          const listItem = document.createElement('li');
          // add anchor (with image) into list item
          listItem.appendChild(anchor);
          // add list item into video list
          videoList.appendChild(listItem);
          // console.log(item.snippet.title, item.snippet.thumbnails.default);
        });
        playerLayer.innerHTML = `<iframe width="100%" src="https://www.youtube.com/embed/${data.items[0].contentDetails.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      });
    });
  } catch (error) {
    console.error('Error fetching .env file:', error);
  }
});
