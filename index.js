
const liffId = "1661342381-JVVYVXww"
window.addEventListener('load', function(){
    let profile;
    liff.init({
        liffId: liffId
      }).then(() => {
        console.log('seccess')
          // ログインしていない
        if (!liff.isInClient() && !liff.isLoggedIn()) {
            liff.login({ redirectUri: location.href });
        }
        console.log("aaaaa")
        profile = liff.getProfile()
        })
        .catch((err) => {
          console.log('LIFFアプリの初期化に失敗しました', err);
        });


})

// https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}