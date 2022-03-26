import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import 'react-responsive-tabs/styles.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import "slick-carousel/slick/slick-theme.css";
import 'react-phone-input-2/lib/style.css'
import 'aos/dist/aos.css';
import '../src/styleSheet/style.css'
import '../src/styleSheet/responsive.css'

AOS.init({
  easing: 'ease-out-back',
  duration: 1000,
  disable: 'mobile',
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
