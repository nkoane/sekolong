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
        document.querySelector('#video-loading').remove();
        console.log(videoList);
        data.items.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.contentDetails.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          videoList.appendChild(listItem);
          console.log(item.snippet.title, item);
        });
      });
    });
  } catch (error) {
    console.error('Error fetching .env file:', error);
  }
});
