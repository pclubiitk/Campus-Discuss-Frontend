import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Avatar,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import Topbar from "../../components/Topbar/index";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  root: {
    padding: 10,
    margin: 10,
  },
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: "2px",
  },
  uploadButton: {
    marginRight: "2px",
  },
  profile2: {
    height: 1100,
    width: 800,
  },
}));

const Profile = (props) => {
  const { className, ...rest } = props;
  const dpInput = React.createRef();

  const classes = useStyles();

  const [values, setValues] = useState({
    name: props.name,
    userName: props.userName,
    email: props.mail,
    fblink: props.fbLink,
    followers: props.followers,
    following: props.following,
    hall: props.hall,
  });
  document.body.style = "background:#f5f5ef ; margin-bottom: 60px;";

  //Handle change in text fields and update profile completeness

  const [completenessIndex, setCompletenessIndex] = useState(0);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    var count = 0;
    for (var key in values) {
      if (values[key]) {
        count++;
      }
    }
    setCompletenessIndex(parseInt((count * 100) / 6));
  };

  //Defined functions for Profile Image upload
  const [avatar, setAvatar] = useState({ selectedFile: null });

  const triggerInput = () => {
    dpInput.current.click();
  };

  const fileSelectedHandler = (event) => {
    setAvatar({ selectedFile: URL.createObjectURL(event.target.files[0]) });
    uploadHandler();
  };

  const uploadHandler = () => {
    console.log(avatar.selectedFile);
  };

  const removeImage = () => {
    setAvatar({ selectedFile: null });
  };

  const handleSave = () => {
    alert("Details saved!");
  };

  const halls = [
    {
      value: "1",
      label: "Hall 1",
    },
    {
      value: "2",
      label: "Hall 2",
    },
    {
      value: "3",
      label: "Hall 3",
    },
    {
      value: "4",
      label: "Hall 4",
    },
    {
      value: "5",
      label: "Hall 5",
    },
    {
      value: "6",
      label: "Hall 6",
    },
    {
      value: "7",
      label: "Hall 7",
    },
    {
      value: "8",
      label: "Hall 8",
    },
    {
      value: "9",
      label: "Hall 9",
    },
    {
      value: "10",
      label: "Hall 10",
    },
    {
      value: "11",
      label: "Hall 11",
    },
    {
      value: "12",
      label: "Hall 12",
    },
    {
      value: "13",
      label: "Hall 13",
    },
  ];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Topbar />
        <Grid container spacing={4}>
          <Grid item md={6} lg={4} xl={4} xs={12}>
            <Card>
              <CardContent>
                <div className={classes.details}>
                  <div>
                    <Typography gutterBottom variant="h4">
                      {values.firstName} {values.lastName}
                      <Typography>{<i>{values.nickname}</i>}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="body1">
                      Following: {values.following}
                    </Typography>
                    <Typography color="textSecondary" variant="body1">
                      Followers: {values.followers}
                    </Typography>
                  </div>
                  <Avatar
                    className={classes.avatar}
                    src={avatar.selectedFile}
                  />
                </div>
                <div className={classes.progress}>
                  <Typography variant="body1">
                    Profile Completeness: {completenessIndex}%
                  </Typography>
                  <LinearProgress
                    value={completenessIndex}
                    variant="determinate"
                  />
                </div>
              </CardContent>
              <Divider />
              <CardActions>
                <div>
                  <label htmlFor="dpInput">
                    <Button
                      className={classes.uploadButton}
                      color="primary"
                      variant="text"
                      onClick={triggerInput}
                    >
                      Upload Picture
                    </Button>
                  </label>
                  <input
                    id="dpInput"
                    style={{ display: "none" }}
                    type="file"
                    onChange={fileSelectedHandler}
                    ref={dpInput}
                  />
                </div>
                <Button variant="text" onClick={removeImage}>
                  Remove picture
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item md={6} xs={12} xl={8} lg={8}>
            <Card {...rest}>
              <form autoComplete="off" noValidate>
                <CardHeader
                  subheader="The information can be edited"
                  title="Profile"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        margin="dense"
                        name="name"
                        value={values.name}
                        variant="outlined"
                        disabled
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Username"
                        margin="dense"
                        name="userName"
                        value={values.userName}
                        variant="outlined"
                        disabled
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="IITK Email Address"
                        helperText="Please specify your IITK mail ID"
                        margin="dense"
                        name="email"
                        onChange={handleChange}
                        required
                        value={values.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Facebook ID"
                        margin="dense"
                        name="fblink"
                        helperText="e.g.https://www.facebook.com/kartikeya.gupta.750 "
                        onChange={handleChange}
                        required
                        type="url"
                        value={values.fblink}
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Hall of Residence"
                        margin="dense"
                        name="hall"
                        onChange={handleChange}
                        required
                        select
                        // eslint-disable-next-line react/jsx-sort-props
                        SelectProps={{ native: true }}
                        value={values.hall}
                        variant="outlined"
                      >
                        {halls.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleSave}
                  >
                    Save details
                  </Button>
                </CardActions>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
      <footer style={{ height: "5px", marginTop: "10%" }}>
        <center>
          <Typography color="textSecondary" variant="body1">
            Copyright ©{" "}
            <Link color="inherit" href="https://pclub.in">
              Programming Club IIT Kanpur
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </center>
      </footer>
    </React.Fragment>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
