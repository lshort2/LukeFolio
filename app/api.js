/**
 * Scoping hack to avoid multiple declaration error
 * when using back/forward buttons of browser
 */
if(true) {
  let apiHost = 'https://api.giphy.com';
  let endpoint = '/v1/gifs/random';
  let apiKeyQuery = '?api_key=yxOgJBtY9aYW8CTeJB5P2s8YhL3H4yvu';
  let apiQuery = '&tag=star+wars&rating=g'
  
  let fullUrl = apiHost + endpoint + apiKeyQuery + apiQuery;
  console.log('fullUrl:');
  console.log(fullUrl);
  
  fetch(fullUrl)
      .then(response => response.json())
      .then(data => {
          // Do what you want with your data
          console.log('I think we got some data.');
          console.log(data);
          let memeSrc = data.data.image_original_url;
          console.log('memeSrc');
          console.log(memeSrc);
          console.log('assigning it...?');
          $('#meme_target').attr('src', memeSrc);
          console.log('assignined?');
  
          setTimeout(function(){
          }, 0);
      })
      .catch(err => {
          console.error('We lost one!', err);
      });
}