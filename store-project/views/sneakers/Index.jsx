const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { sneakers } = this.props

        return (
            <DefaultLayout title="All Sneaker" foodGroup="Sneaker">
                    <h1>Sneaker Index Page</h1>
                    <ul id="Sneaker-index">
                        {sneakers.map((sneaker) => {
                            return (
                                <li key={sneaker._id}>
                                    The <a href={`/sneakers/${sneaker._id}`}>{sneaker.name}</a> is {sneaker.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/sneakers/new">Create a new Shoes</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;