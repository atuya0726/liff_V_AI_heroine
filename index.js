
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
        liff.getProfile()
            .then(profile => {
                console.log("ccccc")
                window.open(`https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}`)
            })
        })
        .catch((err) => {
          console.log('LIFFアプリの初期化に失敗しました', err);
        });


})

// https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}