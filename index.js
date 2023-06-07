// liff.init({
//     liffId: "1661342381-JVVYVXww",
//   }).then(() => {
//     // ログインしていない
//     if (!liff.isLoggedIn()) {
//       return liff.login()
//     }

//     return liff.getProfile()
//       .then(profile => {
//         window.open(`https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}`)
//       })
//   }).catch(e => {
//     console.log(e)
//   })
const liffId = "1661342381-JVVYVXww"
liff.init({
    liffId: liffId
  })
    .then(() => {
      console.log('seccess')
    })
    .catch((err) => {
      console.log('LIFFアプリの初期化に失敗しました', err);
    });
  