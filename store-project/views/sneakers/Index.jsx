const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { snkrs } = this.props

        return (
            <DefaultLayout title="All Sneaker" foodGroup="Sneaker">
                
                    <h1 class="collection">Collection</h1>
                   
                   <div class='Shoes-collection'>
                    
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/075/487/425/original/999930_00.png.png?width=100" alt="DUNKS" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/250/443/original/931515_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/073/720/045/original/935629_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/075/378/072/original/981526_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/075/209/345/original/942086_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/077/642/702/original/994564_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/072/682/261/original/924126_00.png.png?width=100" alt="" />
                   <img src="https://image.goat.com/transform/v1/attachments/product_template_pictures/images/078/856/147/original/933532_00.png.png?width=100" alt="" />

                
                   </div>
                   
                  
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  
                        
                    
            </DefaultLayout>
        )
    }
}

module.exports = Index;