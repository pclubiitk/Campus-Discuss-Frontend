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
  const [arr, setArr] = useState([]);

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
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={validateandSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
