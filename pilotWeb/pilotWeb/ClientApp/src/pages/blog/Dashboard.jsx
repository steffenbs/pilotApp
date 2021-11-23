import React from 'react'

export default function Dashboard() {
    const blogCards = [
        { id: 1, title: "The ultimate HTML cheat sheet for beginners", description: "This is a sound description", created: "Monday 4th October" },
        { id: 2, title: "Post 2: A long as title", description: "small description", created: "Tuesday 5th October" },
        { id: 3, title: "Post 3", description: "This is a sound description", created: "Thursday 7th October" },
        { id: 4, title: "Post 4: A very very very long as title: A very very very long as title: A very very very long as title: A very very very long as title: A very very very long as title: A very very very long as title", description: "This is a sound description", created: "Monday 11th October" },
        { id: 5, title: "Post 5: A very very very long as title", description: "This is a sound description", created: "Thursday 14th October" },
    ]
    return (
        <div className="row2 blogContainer">
            {blogCards.map((keyName, i) => (
                <div className="blogListItem" key={i} onClick={() => console.log("Clicked: ", keyName.id)}>
                    <div className="row1 blogCardTag">Tag: </div>
                    <div className="row2 blogCardTag">Date:{keyName.id}</div>
                    <div className="row3 blogCardTitle"><div className="titleText">{keyName.title}</div></div>
                </div>
            ))}
        </div>
    )
}
