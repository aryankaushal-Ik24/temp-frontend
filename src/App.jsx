import React from 'react'

const App = () => {
  
    const handleOnClick = (e) => {
      e.preventDefault();
      const shop = 'aryan-store-007.myshopify.com'
      console.log(shop);
      const clientId = 'd58d81c5f8fa4c477cda2118c4ea0c2d';
      const redirectUri = encodeURIComponent('https://temp-backend-5.onrender.com/auth/callback');
      const scopes = 'read_products';
      const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;
      console.log(authUrl);
      window.location.href = authUrl;
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>click the button to get the connected with shopify</h1>
      <div>
        <form id="connect-form" onSubmit={handleOnClick}>
          <input type="text" id="shop" placeholder="yourstore.myshopify.com" required />
          <button type="submit">Connect Store</button>
        </form>
      </div>
    </div>
  )
}

export default App