// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Importamos la API de Twitter
const Twitter = require("twitter");

module.exports = function(api) {
  // Esta función se llamará cuando se genere la página
  api.loadSource(async ({ addCollection }) => {
    let tweets = [];
    // Solamente se coge datos reales cuando esté en producción
    if (process.env.PRODUCTION) {
      // Configuramos el cliente con nuestras claves
      var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        bearer_token: process.env.TWITTER_BEARER_TOKEN,
      });

      // Usuario que se va a buscar
      var params = {
        screen_name: "DSC_Granada",
      };

      // Obtenemos nuestros tweets
      tweets = await client.get("statuses/user_timeline", params);
    } else {
      // En local se generan tweets de prueba
      for (let i = 0; i < 20; i += 1) {
        tweets.push({
          id: i,
          media: "twitter",
          created_at: new Date(),
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          user: {
            name: "Cuenta del DSC_Granada",
            screen_name: "DSC_Granada",
            description: "Descripción de la cuenta del DSC_Granada",
            profile_image_url:
              "http://pbs.twimg.com/profile_images/1180788038496083973/z2L0vBWY_normal.jpg",
          },
        });
      }
    }

    // Creamos una colección de posts de Twitter
    const twitterCollection = addCollection({
      typeName: "twitterPost",
    });

    // Añadimos cada tweet en la Base de datos con addNode
    for (const tweet of tweets) {
      twitterCollection.addNode({
        id: tweet.id,
        media: "twitter",
        created_at: tweet.created_at,
        text: tweet.text,
        user_name: tweet.user.name,
        screen_name: tweet.user.screen_name,
        user_description: tweet.user.description,
        profile_url: tweet.user.profile_image_url,
      });
    }
  });
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
