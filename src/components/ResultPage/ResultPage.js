import React from 'react';
import GithubBox from '../GithubBox/GithubBox';

const ResultPage = (props) => (
    <div>
        <GithubBox data={props.data} userId={props.location.query.userId} />
    </div>
);

export default ResultPage;
