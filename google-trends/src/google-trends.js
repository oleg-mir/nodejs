const googleTrends = require('google-trends-api');

// googleTrends.interestOverTime({keyword: 'Valentines Day'})
// .then((res) => {
//   console.log('this is res', res);
// })
// .catch((err) => {
//   console.log('got the error', err);
//   console.log('error message', err.message);
//   console.log('request body',  err.requestBody);
// });


googleTrends.realTimeTrends({
  geo: 'IL',
  category: 'Computers & Electronics',
}, function(err, results) {
   if (err) console.log('oh no error!', err);
   else console.log(results);
});

// googleTrends.dailyTrends({
//    geo: 'IL'
// }, function(err, results) {
//    if (err) {
//      console.log('oh no error!', err);
//    }else{
//      console.log(results);
//    }
// }); 

