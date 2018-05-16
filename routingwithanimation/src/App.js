import React ,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AnimatedSwitch } from 'react-router-transition';

import A from './A/A'
import B from './B/B'
import C from './C/C'
import Navigation from './Navigation/Navigation'
import style from './App.css'

// we need to map the `scale` prop we define below
// to the transform style property
// function mapStyles(styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `scale(${styles.scale})`,
//   };
// }

// wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 1000,
//     damping: 800,
//   });
// }

// // child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
//     scale: 1,
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: bounce(0),
//     scale: bounce(2),
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: bounce(1),
//     scale: bounce(1),
//   },
// };

class App extends Component {
  render() {
    return (
   
      <div className="App">
      
            <Router>
              <div >
            <Navigation />

            <AnimatedSwitch
              // atEnter={bounceTransition.atEnter}
              // atLeave={bounceTransition.atLeave}
              // atActive={bounceTransition.atActive}
              // mapStyles={mapStyles}

              // atEnter={{ offset: -100 }}
              // atLeave={{ offset: 100 }}
              // atActive={{ offset: 0 }}

              atEnter={{ offset: 45  }}
              atLeave={{ offset: 0}}
              atActive={{ offset:0 }}

              mapStyles={(styles) => ({
                transform: `skewX(${styles.offset}deg)`,
              })}
              className="route-wrapper"
            >
         
              
                <Route path="/A" component={A} />      
                <Route path="/B" component={B} />
                <Route path="/C" component={C} />
                <Route path="/" component={A} />
            
               
            
            </AnimatedSwitch>

            </div>

            
             </Router>
      
      </div>
    
    );
  }
}

export default App;

