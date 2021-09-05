import  React from 'react';

const Header = () => {
    return(
        <div className="header">
            <div className="container">
              <div className="row v-center space-between">
                    <div className="logo">
                        <a href="/">JUAN CASTRO</a>
                    </div>    
                    <div className="nav">
                         <a href="/">INFO</a>
                    </div>
              </div>  
            </div>
        </div>
    );

}

export default Header;