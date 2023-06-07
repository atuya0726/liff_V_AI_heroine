
const liffId = "1661342381-JVVYVXww"
window.addEventListener('load', function(){
    liff.init({
        liffId: liffId
      }).then(() => {
        console.log('seccess')
          // ログインしていない
        if (!liff.isInClient() && !liff.isLoggedIn()) {
            liff.login();
        }
    
        return liff.getProfile()
            .then(profile => {
                window.open(`https://peppy-lebkuchen-626179.netlify.app/redirect.html`)
            })
        })
        .catch((err) => {
          console.log('LIFFアプリの初期化に失敗しました', err);
        });


})

// https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}