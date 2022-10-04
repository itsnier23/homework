const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Prince SNKRS</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                <nav>
                    <div class="logo">
                        <h4>THE NAV</h4>
                    </div>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
                
                        


                    {this.props.children}
                    
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;