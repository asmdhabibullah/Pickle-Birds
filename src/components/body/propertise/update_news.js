import React from 'react';


const UpdateNews = () => {
    return (
        <div className="update_news">
            <img src={`${process.env.PUBLIC_URL}/assets/images/bg_news.png`} />
            <div className="container text-center">
                <div className="wrap_contant">
                    <h1>Welcome To Pickle Birds!</h1>
                    <hr className="star_border"></hr>
                    <h4>We are Python & Javascript Developer.</h4>
                </div>
            </div>
        </div>

    );
};



export default UpdateNews;
