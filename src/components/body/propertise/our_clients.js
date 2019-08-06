import React from 'react';



const OurClients = () => {
    return (
        <div className="our_clients">
            <div className="container">
                <div className="row">
                    <div className="col-xl-1 col-md-1 col-sm-4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/googlelogo.png`} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClients;
