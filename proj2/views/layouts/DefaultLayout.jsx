const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Prince Rainier</title>
                   
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <header>
                    <img class="logo" src="http://images.squarespace-cdn.com/content/v1/56e9b38c2b8dde820241b62d/1458744118920-X3UHV0JBICXIAIOZSDU0/prince_web.png" alt="PRINCE SNKRS" />
                    <nav>
                        <ul class="nav__links">
                            <li><a href="/products">HOME</a></li>
                            
                          
                        </ul>
                        </nav>
                         <a href="/products/new"><button>ADD YOUR SHOES</button></a>

                    </header>
                    

                   


                 
                    
                    
                    
                    
                      
                        
                        
                        
                    {/* <a href="/products/new"><button>ADD YOUR SHOES</button></a> */}
                        

                   

                  
              
                
                        


                    {this.props.children}
                    
                   
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;


