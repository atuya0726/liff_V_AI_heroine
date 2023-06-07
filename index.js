liff.init({
    liffId: "1661342381-JVVYVXww",
  }).then(() => {
    // ログインしていない
    if (!liff.isLoggedIn()) {
      return liff.login()
    }

    return liff.getProfile()
      .then(profile => {
        window.open(`https://buy.stripe.com/test_7sIeXt7dA0LL8Pm7st?client_reference_id=${profile.userId}`)
      })
  }).catch(e => {
    console.log(e)
  })