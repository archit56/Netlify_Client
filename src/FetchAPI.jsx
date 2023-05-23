import React, { useState, useEffect } from "react";

const FetchAPI = () => {
    const [data, updateData] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://render-server-ep07.onrender.com/api");
        const jsonData = await res.json();
        console.log(jsonData);
        updateData(jsonData);
    }

    useEffect(() => {
        fetchData();
    }, [])



    const renderTile = (item) => {
        const uniqueID = item._id;
        return (
            <>

                <button className="btn btn-primary modify-btn" type="submit" name="checkbox" value={uniqueID} onClick={
                    async (e) => {
                        e.preventDefault();
                        let result = await fetch(
                            'https://render-server-ep07.onrender.com/delete', {
                            method: "post",
                            body: JSON.stringify({ uniqueID }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        result = await result.json();
                        console.warn(result);
                        if (result) {
                            alert("Data saved succesfully");
                        }
                    }
                }>Delete</button>
                {/* <form className="modify-form2" action="/update" method="post">
                    <button className="btn btn-primary modify-btn" type="submit" name="checkbox2" value={item._id}>Update</button>
                </form > */}
                <div class="container-fluid">
                    <div class="tile-main-div row">
                        <div class="col-lg-6 col-md-12 col-sm-12 tile-sub">
                            <div class="tile-content">
                                <h1 class="tile-heading">
                                    {item.name}
                                </h1>
                                <p class="tile-description">
                                    {item.email}
                                    <p />
                                    {item.date}
                                </p>
                                <div class="tile-link">
                                    <a href="#" target="_blank" rel="noreferrer">
                                        <p></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 tile-sub">
                            <img class="tile-image" src={item.image} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return <div>
        <p />
        <div>
            {/* <ol>
                {data.map(item => (
                    <li>{JSON.stringify(item)}</li>
                ))}
            </ol> */}

        </div>

        {/*  */}
        {data.map(renderTile)}


        {/*  */}
    </div>
}

export default FetchAPI;