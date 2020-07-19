// @flow
import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { createPost } from "../../utils/requests";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { DropzoneDialog } from "material-ui-dropzone";
import SendIcon from "@material-ui/icons/Send";
import { Typography } from "@material-ui/core";
import { blueGrey, indigo, grey } from "@material-ui/core/colors";
import { Screen, useOpenStream } from "../utils";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    outer: {
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

// function DropzoneDialogExample(props) {
//   const [open, setOpen] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [arr, setArr] = useState([]);

//   const classes = useStyles();

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSave = (files) => {
//     setFiles(files);
//     setOpen(false);
//     if (files) {
//       files.forEach((file) => {
//         var objectURL = URL.createObjectURL(file);
//         arr.push(objectURL);
//         setArr(arr);
//       });
//       props.changeFile(arr);
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//     setArr([]);
//   };

//   return (
//     <div>
//       <div className="form-group multi-preview">
//         {(arr || []).map((url) => (
//           <img src={url} alt="..." width="200" height="100" border="3" />
//         ))}
//       </div>
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.uploadButton}
//         component="span"
//         startIcon={<CloudUploadIcon />}
//         onClick={handleOpen}
//       >
//         Upload Images
//       </Button>
//       <DropzoneDialog
//         open={open}
//         onSave={handleSave}
//         acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
//         showPreviews={true}
//         maxFileSize={5000000}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }

type Props = {
  onSubmit: (name: string, description: string, images: File[]) => void,
  stream: string,
};

const CreatePost = (props: Props) => {
  const titleEl = useRef<HTMLInputElement | null>(null);
  const contentEl = useRef<HTMLInputElement | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const classes = useStyles();
  const stream = useOpenStream();

  // const [imgarr, setImgarr] = useState([]);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);

  const validateandSubmit = async () => {
    if (!titleEl.current || !contentEl.current) return;
    setText1(titleEl.current.value === "");
    setText2(contentEl.current && contentEl.current.value === "");
    // $FlowFixMe
    if (!(titleEl.current.value === "" || contentEl.current.value === "")) {
      try {
        await createPost(
          titleEl.current.value,
          contentEl.current.value,
          stream.title
        );
        history.push(`/stream/${stream.pk}`);
      } catch (error) {
        enqueueSnackbar("An error occured while sending your post.", {
          variant: "error",
        });
      }
    }
  };

  return (
    <>
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
                  inputRef={titleEl}
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
                  inputRef={contentEl}
                />
              </div>
              {/* <div className={classes.root}>
                <DropzoneDialogExample changeFile={setImgarr} />
              </div> */}
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
    </>
  );
};

const CreatePostScreen = () => {
  return (
    <Screen
      title="Create post"
      renderMain={() => <CreatePost onSubmit={() => {}} stream={"Politics"} />}
    />
  );
};

export default CreatePostScreen;
