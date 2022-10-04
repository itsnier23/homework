const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='create a new sneakers' foodGroup='sneakers'>
            
                <h1>CREATE YOUR OWN SNEAKERS</h1>
                <form action="/sneakers" method='POST'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='color'>Color:</label>
                    <input type='text' id='color' name='color'></input>

                    <input type='submit' value="Create Sneakers"></input>
                </form>
            
            </DefaultLayout>
        ) 
    }
}

module.exports = New