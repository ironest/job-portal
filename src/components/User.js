import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

function User(props) {

  const { user } = props;

  return (
    <Card className="user">

      <CardMedia
        image={`https://robohash.org/${user.contactDetail.email}.png?set=set1&bgset=bg2`}
        className="user-avatar"
      />

      <CardContent
        className="user-info"
      >
        <h2>{user.jobTitle}</h2>
        <p>{user.firstName} {user.lastName}</p>

        {
          user.skills.length > 0 &&
          user.skills.map((skill, idx) => {
            return <Chip key={idx} size="small" label={skill} className="chip" />
          })
        }

      </CardContent>
    </Card>
  );
}

export default User;
