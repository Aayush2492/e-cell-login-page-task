import React from 'react';

function App() {
  return (
    <div className="body">
        <div className="top">

            <h1>Welcome</h1>

            <div className="text">
                <input type="text" placeholder="Username"/>
            </div>

            <div className="text">
                <input type="password" placeholder="Password"/>
            </div>
            
            <div className="forgot-password">
                <a href="#" className="anchor">
                    Forgot password
                </a>
            </div>
            
            <input className="button "type="button" value="Login"/>

        </div>
    </div>

  );
}

export default App;
