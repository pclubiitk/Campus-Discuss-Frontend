import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red, blue } from "@material-ui/core/colors";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    textAlign: "left",
    justifyContent: "left",
    alignContent: "left",
  },
  avatar: {
    backgroundColor: "white",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  title: {
    fontSize: "large",
    color: "white",
  },
  subheader: {
    fontSize: "large",
    color: "white",
  },

  img: {
    height: 500,
  },
}));

function MultipleImageUploadComponent(props) {
  var fileObj = [];
  const [fileArray, setArray] = useState([]);

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      props.files.push(URL.createObjectURL(fileObj[0][i]));
    }
    setArray(props.files);
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    console.log(fileArray);
  };

  return (
    <form>
      <div className="form-group multi-preview">
        {(fileArray || []).map((url) => (
          <img src={url} alt="..." width="200" height="100" />
        ))}
      </div>

      <div className="form-group">
        <input
          type="file"
          onChange={uploadMultipleFiles}
          multiple
          style={{ display: "none" }}
          id="upload-button"
        />
        <label htmlFor="upload-button">
          <Button
            variant="contained"
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </label>
      </div>
    </form>
  );
}

export default function Maxmised(props) {
  const classes = useStyles();
  var imgarr = [];

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.title, subheader: classes.subheader }}
        avatar={
          <Avatar className={classes.avatar}>
            <CreateIcon color="primary" fontSize="medium" />
          </Avatar>
        }
        title="CREATE POST"
        subheader={props.stream}
        style={{
          textAlign: "left",
          backgroundColor: "#3f51b5",
        }}
      />

      <CardContent>
        <Typography variant="body2" color="black" component="p">
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="post-title"
                label="Post Title"
                placeholder="Your Title"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <TextField
                required
                id="post-content"
                label="Post Content"
                placeholder="Your Content"
                multiline
                rows="12"
                variant="outlined"
              />
            </div>
            <div className={classes.root}>
              <MultipleImageUploadComponent files={imgarr} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={() => {
                  props.onSubmit(
                    document.getElementById("post-title").value,
                    document.getElementById("post-content").value,
                    imgarr
                  );
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Typography>
      </CardContent>
    </Card>
  );
}
