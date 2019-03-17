import React from "react";
const Grid = props => (
    <ul className="grid">
        {props.data.map(data => (
            <li key={data.id} className="item">
                <div className="title_box">
                    <abbr>{data.name}</abbr>
                </div>
                <div className="image_box">
                    <img src="https://simplywall.st/build/images/background13.svg" alt="analysis"
                         height="300"></img>
                </div>
                <div className="description_box">
                    <div className="logo">
                        <img alt={data.name + " logo"}
                             src={process.env.REACT_APP_API_URL + data.info.data.logo_url}></img>
                    </div>
                    <h4 className="title">
                        <span>{data.unique_symbol}</span>
                    </h4>
                    <div className="background_image">
                        <img src={process.env.REACT_APP_API_URL + data.info.data.cover_small_url}
                             alt={data.name + " logo"}></img>
                    </div>
                    <p className="description">
                        {data.info.data.description}
                    </p>
                </div>
            </li>
        ))}
    </ul>
)

export default Grid;
