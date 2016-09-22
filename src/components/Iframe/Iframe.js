/**
 * Examples iframe (https://iframe.shaoke.me/)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 import React from 'react';
 import withStyles from 'isomorphic-style-loader/lib/withStyles';
 import s from './Iframe.css';
 import {Button} from 'react-bootstrap';

 function Iframe() {
   return (
     <div className={s.root}>
       <Button>Default</Button>
     </div>
   );
 }

 export default withStyles(s)(Iframe);
