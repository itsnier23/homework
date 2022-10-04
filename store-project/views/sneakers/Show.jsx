const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Show extends React.Component {

    render() {

        const { name, color, _id } = this.props.sneakers

        return (
            <DefaultLayout title={`${name} details`} foodGroup='sneakers'>
            
                <h1>sneakers</h1>
                <p>
                    The {name} is {color}.
                </p>

                <button>
                    <a href={`/sneakers/${_id}/edit`}>Edit</a>
                </button>

                <form action={`/sneakers/${_id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='Delete'></input>
                </form>

                <nav>
                    <a href='/sneakers'>Back</a>
                </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = Show