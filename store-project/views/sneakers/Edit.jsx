const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { sneakers } = this.props
        
        return (
            <DefaultLayout title='edit a sneakers' foodGroup='sneakers'>
            
                <h1>New Page</h1>
                <form action={`/sneakers/${sneakers._id}?_method=PUT`} method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={sneakers.name }></input>

                    <label htmlFor='color'>Color:</label>
                    <input type='text' id='color' name='color' defaultValue={ sneakers.color }></input>

                    <input type='submit' value="Edit Sneakers"></input>
                </form>
            
            </DefaultLayout>
        ) 
    }
}

module.exports = Edit