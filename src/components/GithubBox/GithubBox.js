import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import RaiseButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = (props) => (
    <div>
        <Card>
            <CardHeader
                title={props.data.get('name')}
                subtitle={props.userId}
                avatar={props.data.get('avatar_url')}
            />
            <CardText>
                Followers: {props.data.get('followers')}
            </CardText>
            <CardText>
                Following: {props.data.get('following')}
            </CardText>
            <CardActions>
                <Link to="/">
                    <RaiseButton label="Back" icon={<ActionHome />} secondary={true} />
                </Link>
            </CardActions>
        </Card>
    </div>
);

export default GithubBox;
