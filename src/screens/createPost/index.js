import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SendIcon from "@material-ui/icons/Send";
import { DropzoneDialog } from "material-ui-dropzone";
import { Typography } from "@material-ui/core";
import { blueGrey, indigo, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    outer: {
      height: "100vh",
      width: "100vw",
      backgroundColor: dark ? grey["900"] : blueGrey["50"],
      borderRadius: 0,
    },
    header: {
      textAlign: "left",
      backgroundColor: dark ? indigo["900"] : indigo["700"],
    },
    submitButton: {
      margin: theme.spacing(1),
      width: "100%",
      backgroundColor: dark ? indigo["900"] : indigo["600"],
      color: dark ? blueGrey["100"] : blueGrey["50"],
    },
    uploadButton: {
      backgroundColor: dark ? indigo["900"] : indigo["600"],
      color: dark ? blueGrey["100"] : blueGrey["50"],
    },
    card: {
      width: "100%",
      textAlign: "left",
      justifyContent: "left",
      alignContent: "left",
    },
    avatar: {
      backgroundColor: dark ? blueGrey["100"] : blueGrey["50"],
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
    title: { color: dark ? indigo["100"] : grey["50"] },
    subheader: { color: dark ? indigo["300"] : indigo["100"] },

    img: {
      height: 500,
    },
  };
});

function DropzoneDialogExample(props) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [arr, setArr] = useState([]);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (files) => {
    setFiles(files);
    setOpen(false);
    if (files) {
      files.forEach((file) => {
        var objectURL = URL.createObjectURL(file);
        arr.push(objectURL);
        setArr(arr);
      });
      props.changeFile(arr);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setArr([]);
  };

  return (
    <div>
      <div className="form-group multi-preview">
        {(arr || []).map((url) => (
          <img src={url} alt="..." width="200" height="100" border="3" />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.uploadButton}
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

export default function CreatePost(props) {
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const classes = useStyles();

  const [imgarr, setImgarr] = useState([]);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);

  const validateandSubmit = () => {
    let formValid = false;
    if (inputEl1.current.value === "") {
      setText1(true);
    } else {
      setText1(false);
    }
    if (inputEl2.current.value === "") {
      setText2(true);
    } else {
      setText2(false);
    }
    if (!(inputEl1.current.value === "" || inputEl2.current.value === "")) {
      setText1(false);
      setText2(false);
      formValid = true;
    }
    if (formValid) {
      props.onSubmit(inputEl1.current.value, inputEl2.current.value, imgarr);
    }
  };

  return (
    <Card className={classes.outer}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <CreateIcon color="primary" fontSize="medium" />
            </Avatar>
          }
          title={
            <Typography className={classes.title} variant="h5">
              CREATE POST
            </Typography>
          }
          subheader={
            <Typography className={classes.subheader}>
              {props.stream}
            </Typography>
          }
          className={classes.header}
        />

        <CardContent>
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
                inputRef={inputEl1}
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
                inputRef={inputEl2}
              />
            </div>
            <div className={classes.root}>
              <DropzoneDialogExample changeFile={setImgarr} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.submitButton}
                endIcon={<SendIcon />}
                onClick={validateandSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Card>
  );
}
