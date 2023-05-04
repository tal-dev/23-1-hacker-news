import React from "react"

class NewsCard extends React.Component {

    constructor() {
        super()
    }

    render() {

        const {newsItem} = this.props

        return (
            <div className="card">
                <a className="title" href={newsItem
                .url} target="_blank">{newsItem.title || "Title not found"}</a>
                <div>Author: {newsItem.author || "Author not found"}</div>
            </div>
        )
    }
}

export default NewsCard