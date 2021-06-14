import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import Home from "./components/Home/Home"
import Albums from "./components/Albums/Albums"
import Artists from "./components/Artists/Artists"
import Songs from "./components/Songs/Songs"
import Playlists from "./components/Playlists/Playlists"
import UploadMusic from "./components/Upload/Upload";
import Player from "./components/Player/Player"
import Album from "./components/Albums/oneAlbum"
import Playlist from "./components/Playlists/onePlaylist"

function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <NavBar />
    <Player />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/home" exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/albums" exact={true} >
          <Albums />
        </ProtectedRoute>
        <ProtectedRoute path="/albums/:id" exact={true} >
          <Album />
        </ProtectedRoute>
        <ProtectedRoute path="/playlists/:id" exact={true} >
          <Playlist />
        </ProtectedRoute>
        <ProtectedRoute path="/artists" exact={true} >
          <Artists />
        </ProtectedRoute>
        <ProtectedRoute path="/songs" exact={true} >
          <Songs />
        </ProtectedRoute>
        <ProtectedRoute path="/playlists" exact={true} >
          <Playlists />
        </ProtectedRoute>
        <ProtectedRoute path='/upload' exact={true}>
          <UploadMusic />
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <Redirect to='/login'></Redirect>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
