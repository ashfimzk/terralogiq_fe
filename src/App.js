import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import REST_API from "./services/RESTapi";
import { useEffect, useState } from "react";
import Dashboard from "./pages/landingPageAdmin";
import LandingPage from "./pages/landingPageGuest";

function App() {

  const Navigate = useNavigate()

  const [profile, setProfile] = useState({
    username: null,
    role: null,
  });

  let getProfile = async () => {
    try {
      const { data } = await REST_API({
        url: "/user/get-profile",
        method: "GET",
      });

      console.log(data.data[0], "cekkk");
      setProfile({
        ...profile,
        username: data.data[0].username,
        role: data.data[0].role,
      });

    } catch (error) {
      console.log(error);
      Navigate('/login')
    }
  };

  let onLogin = async (username, password) => {
    console.log(username, password);
    try {
      const { data } = await REST_API({
        url: "/user/login",
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      });

      localStorage.setItem("token", data.data);
      getProfile();
      alert('login success')
      setTimeout(() => {
        window.location.href = "http://localhost:3000/";
      }, 3000);

      console.log(data);
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    alert("Time Out, Please Login Again")
    window.location.reload(); // Refresh the page
  };
  
  useEffect(() => {
    getProfile();
  
    const intervalId = setInterval(() => {
      deleteToken();
    }, 10 * 60 * 1000); // 10 minutes
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login Func={{ onLogin }} />} />
        <Route
          path="/"
          element={
            profile.role === "admin" ? (
              <Dashboard />
            ) : profile.role === "guest" ? (
              <LandingPage />
            ) : null
          }
        />
      </Routes>
    </div>
  );
}

export default App;
