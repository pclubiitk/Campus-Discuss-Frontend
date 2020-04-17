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
import { DropzoneDialog } from "material-ui-dropzone";

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

function DropzoneDialogExample(props) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (files) => {
    setFiles(files);
    setOpen(false);
    if (files) {
      files.forEach((file) => {
        var objectURL = URL.createObjectURL(file);
        props.filearray.push(objectURL);
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
    props.filearray.length = 0;
  };

  return (
    <div>
      <div className="form-group multi-preview">
        {(props.filearray || []).map((url) => (
          <img src={url} alt="..." width="200" height="100" border="3" />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Upload Images
      </Button>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </div>
  );
}

export default function Maxmised(props) {
  const classes = useStyles();
  var imgarr = [];
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);

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
                error={text1}
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
                error={text2}
              />
            </div>
            <div className={classes.root}>
              <DropzoneDialogExample filearray={imgarr} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={() => {
                  if (document.getElementById("post-title").value === "")
                    setText1(true);
                  else setText1(false);
                  if (document.getElementById("post-content").value === "")
                    setText2(true);
                  else setText2(false);
                  if (
                    !(
                      document.getElementById("post-title").value === "" ||
                      document.getElementById("post-content").value === ""
                    )
                  ) {
                    setText1(false);
                    setText2(false);
                    props.onSubmit(
                      document.getElementById("post-title").value,
                      document.getElementById("post-content").value,
                      imgarr
                    );
                  }
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
