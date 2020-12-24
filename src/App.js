import './App.css';
import styled from "styled-components";
import React from "react";

function App() {
  return <Section>
    <Nav>

    <svg 
      width="167" 
      height="27"
      viewBox="0 0 167 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <path d="M26.4599 0.727999L17.4959 26H9.79191L0.827906 0.727999H7.37991L13.6439 19.808L19.9439 0.727999H26.4599ZM44.7648 21.536H35.3328L33.8208 26H27.3768L36.5208 0.727999H43.6488L52.7928 26H46.2768L44.7648 21.536ZM43.1808 16.784L40.0488 7.532L36.9528 16.784H43.1808ZM61.7318 21.248H69.7958V26H55.5758V0.727999H61.7318V21.248ZM84.684 26.252C82.308 26.252 80.124 25.7 78.132 24.596C76.164 23.492 74.592 21.956 73.416 19.988C72.264 17.996 71.688 15.764 71.688 13.292C71.688 10.82 72.264 8.6 73.416 6.632C74.592 4.664 76.164 3.128 78.132 2.024C80.124 0.92 82.308 0.368 84.684 0.368C87.06 0.368 89.232 0.92 91.2 2.024C93.192 3.128 94.752 4.664 95.88 6.632C97.032 8.6 97.608 10.82 97.608 13.292C97.608 15.764 97.032 17.996 95.88 19.988C94.728 21.956 93.168 23.492 91.2 24.596C89.232 25.7 87.06 26.252 84.684 26.252ZM84.684 20.636C86.7 20.636 88.308 19.964 89.508 18.62C90.732 17.276 91.344 15.5 91.344 13.292C91.344 11.06 90.732 9.284 89.508 7.964C88.308 6.62 86.7 5.948 84.684 5.948C82.644 5.948 81.012 6.608 79.788 7.928C78.588 9.248 77.988 11.036 77.988 13.292C77.988 15.524 78.588 17.312 79.788 18.656C81.012 19.976 82.644 20.636 84.684 20.636ZM113.921 26L108.665 16.46H107.189V26H101.033V0.727999H111.365C113.357 0.727999 115.049 1.076 116.441 1.772C117.857 2.468 118.913 3.428 119.609 4.652C120.305 5.852 120.653 7.196 120.653 8.684C120.653 10.364 120.173 11.864 119.213 13.184C118.277 14.504 116.885 15.44 115.037 15.992L120.869 26H113.921ZM107.189 12.104H111.005C112.133 12.104 112.973 11.828 113.525 11.276C114.101 10.724 114.389 9.944 114.389 8.936C114.389 7.976 114.101 7.22 113.525 6.668C112.973 6.116 112.133 5.84 111.005 5.84H107.189V12.104ZM130.673 5.66V10.772H138.917V15.524H130.673V21.068H139.997V26H124.517V0.727999H139.997V5.66H130.673ZM159.474 26L154.326 18.26L149.79 26H142.806L150.906 13.148L142.626 0.727999H149.79L154.866 8.36L159.33 0.727999H166.314L158.286 13.472L166.638 26H159.474Z" fill="black"/>
    </svg>


    </Nav>
    <ActivityList>
      <Activity>
        <p>Gym Apparel</p>
        <svg width="155" height="9" viewBox="0 0 155 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="155" height="9" fill="#FFE715"/>
        </svg>


      </Activity>
      <Activity>
        <p>Duffle Bag</p>
        <svg width="155" height="9" viewBox="0 0 155 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="155" height="9" fill="#FFE715"/>
        </svg>

      </Activity>
      <Activity>
        <p>Supplement</p>
        <svg width="155" height="9" viewBox="0 0 155 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="155" height="9" fill="#FFE715"/>
        </svg>

      </Activity>
      <Activity>
        <p>Accesories</p>
        <svg width="155" height="9" viewBox="0 0 155 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="155" height="9" fill="#FFE715"/>
        </svg>

      </Activity>
    </ActivityList>
  </Section>
}

export default App;

const Section = styled.div`

  margin: 40px 60px 0px 60px;
`;
const Nav = styled.div`
`;
const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
`;
const Activity = styled.div`
  margin-left: 40px;
  gravity: centre;
  //background: papayawhip;
  display: inline-block;
  display: block;
  width: 90%;

  text-align: center;
  svg {
    transition: transform 1s;
    //position: absolute;
  }

  svg:hover {
    transform: scale(1.5);
  }
`;