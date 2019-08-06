import React from 'react';


const StudentComments = () => {

    return (
        <div className="student_comments">
            <img className="com_bg" src={`${process.env.PUBLIC_URL}/assets/images/comments_bg.png`} alt="" />
            <div className="container">
                <img className="comments_img" src={`${process.env.PUBLIC_URL}/assets/images/googlelogo.png`} alt="" />
                <div className="text-center">
                    <h2>"Hey, My name is As Md Habibullah"</h2>
                    <p>NTV Popular Drama SerialNTV Popular Drama SerialNTV Popular Drama SerialNTV Popular Drama Serial</p>
                </div>
            </div>
        </div>

    );
};


export default StudentComments;
