import React from "react";
import Header from "./ui/Header";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./ui/Theme";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./landing-page/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/services" component={() => <div>services</div>}></Route>
          <Route exact path="/customservices" component={() => <div>customservices</div>}></Route>
          <Route exact path="/mobilesites" component={() => <div>mobilesites</div>}></Route>
          <Route exact path="/websites" component={() => <div>mobilesites</div>}></Route>
          <Route exact path="/about" component={() => <div>about</div>}></Route>
          <Route exact path="/contact" component={() => <div>contact</div>}></Route>
          <Route exact path="/estimate" component={() => <div>estimate</div>}></Route>
          <Route exact path="/revolution" component={() => <div>revolution</div>}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
