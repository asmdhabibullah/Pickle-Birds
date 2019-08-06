import React from 'react';
import UpdateNews from './propertise/update_news';
import UpdateCource from './propertise/update_cource';
import UpdateProject from './propertise/update_project';
import OurClients from './propertise/our_clients';
import StudentComments from './propertise/student_comments';





const Body = () => {

    return (
        <div className="Body">
            <UpdateNews />
            <UpdateCource />
            <UpdateProject />
            <OurClients />
            <StudentComments />
        </div>
    );
}

export default Body;
