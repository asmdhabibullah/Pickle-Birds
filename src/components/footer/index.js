import React from 'react';


const Footer = () => {
    return (
        <div className="footer bg-dark">

            <hr />
            <footer className="container py-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-sm-12">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Creator</a></li>
                            <li><a className="text-muted" href="/">Team Member</a></li>
                            <li><a className="text-muted" href="/">Terms & Condition's</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-12">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Premium Template</a></li>
                            <li><a className="text-muted" href="/">Importent Post</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-12">
                        <h5>Contact Info</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/">Locations</a></li>
                            <li><a className="text-muted" href="/">Last time</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="inner">
                    <p>Pickle Birds &copy; 2017-2019</p>
                </div>
            </footer>
        </div>
    );
};


export default Footer;
