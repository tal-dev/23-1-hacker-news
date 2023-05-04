import React from "react"
import NewsCard from "./NewsCard"

const baseUrl = "https://hn.algolia.com/api/v1/search?query="

class News extends React.Component {

    constructor() {
        super()
        this.state = {
            inputValue: "",
            news: []
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSearchSubmit = () => {
        fetch(`${baseUrl}${this.state.inputValue}`)
        .then(res => res.json())
        .then(data => this.setState({
            news: data.hits,
            inputValue: ""
        }))
    }

    render() {

        return (
            <div>
                <>
                    <input type="text" placeholder="search" onChange={this.handleInputChange} value={this.state.inputValue

                    }/>
                    <button onClick={this.handleSearchSubmit}>Submit</button>
                </>
                <ul>
                    {
                        this.state.news.map(item => {
                            return <li><NewsCard newsItem={item} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default News