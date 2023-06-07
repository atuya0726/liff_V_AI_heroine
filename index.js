
const liffId = "1661342381-JVVYVXww"
window.addEventListener('load', function(){
    let lineIdToken;
    liff.init({
        liffId: liffId
      }).then(() => {
        console.log('seccess')
          // ログインしていない
        if (!liff.isInClient() && !liff.isLoggedIn()) {
            liff.login({ redirectUri: location.href });
        }
        lineIdToken = liff.getIDToken();
        })
        .catch((err) => {
          console.log('LIFFアプリの初期化に失敗しました', err);
        });

    liff.ready.then(() =>{
        liff.openWindow({url:"https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${lineIdToken}"})
    })


})

// https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}