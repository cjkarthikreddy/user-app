import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { render } from "react-dom";
import UsersPageBuilder from "./components/UsersPageBuilder";
import "./index.css";

render(<UsersPageBuilder />, document.getElementById("root"));
