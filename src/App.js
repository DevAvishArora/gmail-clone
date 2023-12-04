import React, { useEffect } from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mail from "./Components/Mail/Mail";
import EmailList from "./Components/EmailList/EmailList";
import SendMail from "./Components/SendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";
import { auth } from "./fibebase";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
