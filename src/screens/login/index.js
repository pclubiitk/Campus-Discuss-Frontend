// @flow
import React from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Login } from "../../redux/actions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey, indigo } from "@material-ui/core/colors";
import { login, getAppState } from "../../utils/requests";
import sideImg from "../../assets/login-img.jpg";

const useStyles = makeStyles((theme) => {
  const dark = theme.palette.type === "dark";
  return {
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: `url("${sideImg}")`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: dark ? indigo["900"] : indigo["600"],
      color: dark ? blueGrey["100"] : blueGrey["50"],
    },
  };
});

const SignInScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLogin = async (e) => {
    if (e) e.preventDefault();
    try {
      await login(username, password);
      const data = await getAppState();
      dispatch(Login(data));
      history.push("/");
    } catch (err) {
      enqueueSnackbar("An error occured while logging in.", {
        variant: "error",
      });
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label=" IITK Email Address "
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onLogin}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInScreen;
