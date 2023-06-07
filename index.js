
const liffId = "1661342381-JVVYVXww"
window.addEventListener('load', function(){
    liff.init({
        liffId: liffId
      }).then(() => {
        console.log('seccess')
          // ログインしていない
        if (!liff.isInClient() && !liff.isLoggedIn()) {
            liff.login({ redirectUri: location.href });
        }
        console.log("aaaaa")
        })
        .catch((err) => {
          console.log('LIFFアプリの初期化に失敗しました', err);
        });

    liff.ready.then(() =>{
        return liff.getProfile()
        .then(profile => {
          window.open(`https://buy.stripe.com/test_xxxxx?client_reference_id=${profile.userId}`)
        })
    })


})

// https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}