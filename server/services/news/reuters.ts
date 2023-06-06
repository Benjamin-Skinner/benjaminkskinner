// const { SearchApi } = require('financial-news-api');

//   export async function getReutersNews() {
//     const api_key = process.env.NEWSFILTER_APIKEY;
//     console.log(api_key)
//     const searchApi = SearchApi(api_key);

//     const query = {
//         queryString: 'source.id:reuters AND publishedAt:[now-10d/d TO *]'
//     };
    
//     let data = await searchApi.getNews(query)

//     const reutersStories = data.articles.map((story: any) => {
//         return {
//             title: story.title,
//             id: story.id,
//             url: story.sourceUrl,
//             time: new Date(story.publishedAt).getTime() / 1000,
//             source: "Reuters",
//             score: 1000
//         }
//     })

//     return reutersStories

//   }