import React from "react";

export const WEATHER_ICONS = {
  sunny: (
    <svg viewBox="0 0 64 64">
      <circle fill="#efcc00" cx="32" cy="32" r="17" />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="32"
        x2="32"
        y1="5"
        y2="11"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="32"
        x2="32"
        y1="53"
        y2="59"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="59"
        x2="53"
        y1="32"
        y2="32"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="11"
        x2="5"
        y1="32"
        y2="32"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="51.09"
        x2="46.85"
        y1="12.91"
        y2="17.15"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="17.15"
        x2="12.91"
        y1="46.85"
        y2="51.09"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="51.09"
        x2="46.85"
        y1="51.09"
        y2="46.85"
      />
      <line
        fill="none"
        stroke="#efcc00"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3px"
        x1="17.15"
        x2="12.91"
        y1="17.15"
        y2="12.91"
      />
    </svg>
  ),
  moon: (
    <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32">
      <g id="Layer_2" />
      <g id="Layer_3" />
      <g id="Layer_4" />
      <g id="Layer_5" />
      <g id="Layer_6" />
      <g id="Layer_7" />
      <g id="Layer_8" />
      <g id="Layer_9" />
      <g id="Layer_10" />
      <g id="Layer_11" />
      <g id="Layer_12" />
      <g id="Layer_13" />
      <g id="Layer_14" />
      <g id="Layer_15" />
      <g id="Layer_16" />
      <g id="Layer_17" />
      <g id="Layer_18" />
      <g id="Layer_19">
        <g>
          <g>
            <path
              d="M30.9,20.8c-2.2,6.1-8,10.2-14.5,10.2C7.9,31,1,24.2,1,15.8C1,8.7,5.9,2.6,12.9,1c0.3-0.1,0.7,0,1,0.3     c0.2,0.3,0.3,0.7,0.2,1c-0.5,1.4-0.8,2.9-0.8,4.4c0,7.3,6,13.2,13.4,13.2c1,0,2.1-0.1,3.1-0.4c0.3-0.1,0.7,0,1,0.3     C31,20.1,31.1,20.5,30.9,20.8z"
              fill="#FFC10A"
            />
          </g>
        </g>
      </g>
      <g id="Layer_20" />
      <g id="Layer_21" />
      <g id="Layer_22" />
      <g id="Layer_23" />
      <g id="Layer_24" />
      <g id="Layer_25" />
      <g id="Wearher" />
    </svg>
  ),
  snow: (
    <svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm">
      <path
        d="M33.771,35.56A12.292,12.292,0,1,0,21.959,19.9,8.582,8.582,0,1,0,17.106,35.56Z"
        fill="#b9d8e8"
      />
      <circle cx="19.937" cy="34.857" fill="#615c9a" r="2.132" />
      <circle cx="24.337" cy="43.589" fill="#007a9d" r="2.132" />
      <circle cx="28.738" cy="34.344" fill="#9fa6b7" r="2.132" />
      <circle cx="35.752" cy="39.089" fill="#83b3cb" r="2.132" />
    </svg>
  ),
  rain: (
    <svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm">
      <path
        d="M35.25,36.834A12.292,12.292,0,1,0,23.438,21.175a8.582,8.582,0,1,0-4.853,15.659Z"
        fill="#b9d8e8"
      />
      <g>
        <path
          d="M37.208,41.516V34.454"
          fill="none"
          stroke="#83b3cb"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M26.045,47.145V43.123"
          fill="none"
          stroke="#9fa6b7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M21.591,38.3V34.454"
          fill="none"
          stroke="#615c9a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <line
          fill="none"
          stroke="#9fa6b7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          x1="30.245"
          x2="30.245"
          y1="36.76"
          y2="34.454"
        />
      </g>
    </svg>
  ),
  cloudySunny: (
    <svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm">
      <g>
        <circle cx="24.791" cy="26.367" fill="#f5ce42" r="14.185" />
        <path
          d="M35.272,45.405A12.292,12.292,0,1,0,23.46,29.746a8.582,8.582,0,1,0-4.854,15.659Z"
          fill="#b9d8e8"
        />
      </g>
    </svg>
  ),
  cloudyMoon: (
    <svg height="20.315mm" viewBox="0 0 57.587 57.587" width="20.315mm">
      <g>
        <path
          d="M22.682,14.493A11.429,11.429,0,0,1,8.829,25.674a11.436,11.436,0,1,0,13.539-13.8A11.455,11.455,0,0,1,22.682,14.493Z"
          fill="#7269af"
        />
        <path
          d="M36.466,45.716A12.291,12.291,0,1,0,24.654,30.057,8.582,8.582,0,1,0,19.8,45.716Z"
          fill="#b9d8e8"
        />
      </g>
    </svg>
  ),
};

export const CITY_ICONS = {
  "id-1": (
    <svg viewBox="0 0 64 64">
      <g>
        <g>
          <circle cx="32" cy="32" r="32" fill="none" />
        </g>
        <g>
          <path
            d="m13 21.581h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m53 32.581h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m21 51.581c-0.276 0-0.5-0.224-0.5-0.5v-23c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v23c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m26 53.581c-0.276 0-0.5-0.224-0.5-0.5v-25c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v25c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m24 53.581c-0.276 0-0.5-0.224-0.5-0.5v-25c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v25c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m40 53.581c-0.276 0-0.5-0.224-0.5-0.5v-25c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v25c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m38 53.581c-0.276 0-0.5-0.224-0.5-0.5v-25c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v25c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m43 51.581c-0.276 0-0.5-0.224-0.5-0.5v-23c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v23c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m38 53.581c-0.276 0-0.5-0.224-0.5-0.5v-14.5h-11v14.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-15c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v15c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m38 38.581h-12c-0.276 0-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5zm-11.5-1h11v-1h-11v1z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 53.581c-0.276 0-0.5-0.224-0.5-0.5v-6c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v6c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-6c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v6c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 41.581h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m45 36.581h-26c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h26c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m44 26.581h-24c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h24c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m28 34.581c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m30 34.581c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m32 34.581c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m34 34.581c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m36 34.581c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 31.581h-6c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.049 0.013-1.22 1.146-2.354l2-2c0.195-0.195 0.512-0.195 0.707 0l2 2c1.133 1.133 1.146 2.304 1.146 2.354v5c1e-3 0.276-0.223 0.5-0.499 0.5zm-5.5-1h5v-4.5c0-0.028-0.028-0.821-0.854-1.646l-1.646-1.647-1.646 1.646c-0.826 0.826-0.853 1.619-0.854 1.652v4.495z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m33 27.581h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m27 26.581c-0.276 0-0.5-0.224-0.5-0.5v-4.5h-1v4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m27 21.581h-2c-0.173 0-0.334-0.09-0.425-0.237s-0.1-0.332-0.022-0.486l1-2c0.17-0.339 0.725-0.339 0.895 0l1 2c0.078 0.155 0.069 0.339-0.022 0.486s-0.253 0.237-0.426 0.237zm-1.191-1h0.382l-0.191-0.382-0.191 0.382z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m28 23.581h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m39 26.581c-0.276 0-0.5-0.224-0.5-0.5v-4.5h-1v4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m39 21.581h-2c-0.173 0-0.334-0.09-0.425-0.237s-0.1-0.332-0.022-0.486l1-2c0.17-0.339 0.725-0.339 0.895 0l1 2c0.078 0.155 0.069 0.339-0.022 0.486s-0.253 0.237-0.426 0.237zm-1.191-1h0.382l-0.191-0.382-0.191 0.382z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m40 23.581h-4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 11.581c-0.053 0-0.106-8e-3 -0.158-0.026l-2.842-0.947-2.842 0.947c-0.2 0.067-0.417 2e-3 -0.548-0.161s-0.147-0.39-0.04-0.569l1.294-2.172-1.221-1.191c-0.136-0.133-0.185-0.332-0.126-0.512 0.059-0.181 0.215-0.313 0.404-0.34l1.818-0.265 0.813-1.647c0.168-0.342 0.729-0.342 0.896 0l0.813 1.647 1.818 0.265c0.188 0.027 0.345 0.159 0.404 0.34s0.01 0.379-0.126 0.512l-1.221 1.191 1.294 2.172c0.107 0.18 0.091 0.407-0.04 0.569-0.097 0.121-0.242 0.187-0.39 0.187zm-3-2c0.053 0 0.107 9e-3 0.158 0.026l1.724 0.574-0.808-1.355c-0.118-0.199-0.085-0.453 0.081-0.614l0.778-0.759-1.076-0.157c-0.163-0.023-0.304-0.126-0.376-0.273l-0.481-0.974-0.481 0.974c-0.073 0.147-0.213 0.25-0.376 0.273l-1.076 0.157 0.778 0.759c0.166 0.161 0.199 0.415 0.081 0.614l-0.808 1.355 1.724-0.574c0.051-0.017 0.105-0.026 0.158-0.026z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 17.581h-6c-0.168 0-0.325-0.084-0.417-0.225s-0.108-0.318-0.042-0.472l3-7c0.157-0.368 0.762-0.368 0.919 0l3 7c0.066 0.154 0.05 0.332-0.042 0.472-0.093 0.141-0.25 0.225-0.418 0.225zm-5.242-1h4.483l-2.241-5.23-2.242 5.23z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m38 17.581h-12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m35 22.581c-0.276 0-0.5-0.224-0.5-0.5v-4.5h-5v4.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m33 19.581h-2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m12 51.581c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v1.5h2v-1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1.5h-1v1.5c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-1v9.5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m52 51.581c-0.276 0-0.5-0.224-0.5-0.5v-9.5h-1v1.5c0 0.276-0.224 0.5-0.5 0.5h-3c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-1v1.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v1.5h2v-1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v10c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m23 26.581c-0.276 0-0.5-0.224-0.5-0.5v-8.191l-1 0.5v7.691c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-8c0-0.189 0.107-0.362 0.276-0.447l2-1c0.155-0.078 0.339-0.07 0.486 0.022 0.147 0.091 0.237 0.252 0.237 0.425v9c1e-3 0.276-0.223 0.5-0.499 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m43 26.581c-0.276 0-0.5-0.224-0.5-0.5v-7.691l-1-0.5v8.191c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-9c0-0.173 0.09-0.334 0.237-0.425s0.332-0.099 0.486-0.022l2 1c0.169 0.085 0.276 0.258 0.276 0.447v8c1e-3 0.276-0.223 0.5-0.499 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m49 51.581c-0.276 0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.449-1-1-1s-1 0.449-1 1v2.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2.5c0-1.103 0.897-2 2-2s2 0.897 2 2v2.5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
        <g>
          <path
            d="m18 51.581c-0.276 0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.449-1-1-1s-1 0.449-1 1v2.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2.5c0-1.103 0.897-2 2-2s2 0.897 2 2v2.5c0 0.276-0.224 0.5-0.5 0.5z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
  "id-2": (
    <svg viewBox="0 0 1024 1024">
      <path
        d="M176 1024a16 16 0 0 1 0-32h192V656a16 16 0 0 1 32 0v336h448a16 16 0 0 1 0 32H176z m176-400a16 16 0 0 1-16-16V288a16 16 0 0 1 16-16h32v-48a16 16 0 0 1 16-16h32v-48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16v48h32a16 16 0 0 1 16 16v48h32a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16h-16v336a16 16 0 0 1-32 0V624H352z m160 32a16 16 0 0 1 16 16v272a16 16 0 0 1-32 0V672a16 16 0 0 1 16-16z m-64 48a16 16 0 0 1 16 16v176a16 16 0 0 1-32 0V720a16 16 0 0 1 16-16z m128 0a16 16 0 0 1 16 16v176a16 16 0 0 1-32 0V720a16 16 0 0 1 16-16z m80-400H368v288h288V304z m-144 32a112 112 0 1 1 0 224 112 112 0 0 1 0-224z m0 32a80 80 0 1 0 0 160 80 80 0 0 0 0-160z m0 16a16 16 0 0 1 16 16v32h32a16 16 0 0 1 0 32h-48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16z m-48-144h-48v32h48v-32z m64 0h-32v32h32v-32z m80 0h-48v32h48v-32z m-48-64h-96v32h96v-32zM512 0a16 16 0 0 1 16 16v16l-0.048 0.768L576 143.984h-31.6L512 66.384 479.6 144H448l48.016-111.2L496 16a16 16 0 0 1 16-16z"
        fill="#fff"
      />
    </svg>
  ),
  "id-3": (
    <svg viewBox="0 0 1920 1920">
      <path
        fill="none"
        d="M1437 1701.7h-177s-2.7-6.1-7.6-16.1c-22-45.5-87.8-172.1-139.4-172.1-3.5 0-6.8.2-10 .6-54.9 7.1-71 74.7-71 182.4H867s41.3-200.5-60-189c-6.2.7-12.3 2.4-18.4 5.1-58.7 25.1-113.6 131-151.3 173-8.3 9.3-15.8 15.4-22.3 16.9H483s117-54 213-231c13.5-24.9 26.5-51.9 38.9-80.4l192.1-33.6 226 38.5c177 254.4 284 305.7 284 305.7zm-294-320.2c-29.1-42.5-53.9-97.2-74.8-159.2L918 1186.5l-121.9 35.3c-18.1 59.9-38.6 117.2-61.2 169.3l192.1-33.6 226 38.5c-3.3-4.8-6.7-9.6-10-14.5zm-103.3-256.2L918 1096.5l-95.2 27.5c-8.2 33.1-17.1 65.8-26.7 97.8l121.9-35.3 150.2 35.8c-10.4-30.7-19.9-63.3-28.5-97zM959 424.5l22-60-54-48-57 51 26 54s-5 150-20 372c-7 103.2-25.6 218.7-53.2 330.5l95.2-27.5 121.7 28.8c-64.5-252.2-81-570.3-80.7-700.8z"
        id="Layer_3"
      />
      <path
        fill="none"
        d="M788.8 1513.1s-64.7 37.5-43.7 172.5H637.3c37.7-42 92.6-147.9 151.3-173l.2.5zm314.2 1v.3s64 36.2 43 171.2h106.4c-22-45.5-87.8-172.1-139.4-172.1-3.5 0-6.8.2-10 .6z"
        id="Layer_4"
      />
      <g>
        <g>
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M1153 1396c177 254.5 284 305.7 284 305.7h-177s-2.7-6.1-7.6-16.1c-22-45.5-87.8-172.1-139.4-172.1-3.5 0-6.8.2-10 .6-54.9 7.1-71 74.7-71 182.4H867s41.3-200.5-60-189c-6.2.7-12.3 2.4-18.4 5.1-58.7 25.1-113.6 131-151.3 173-8.3 9.3-15.8 15.4-22.3 16.9H483s117-54 213-231c13.5-24.9 26.5-51.9 38.9-80.4 22.6-52.1 43.2-109.4 61.2-169.3 9.6-32 18.6-64.8 26.7-97.8 27.6-111.8 46.2-227.3 53.2-330.5 15-222 20-372 20-372l-26-54 57-51 54 48-22 60c-.3 130.5 16.2 448.6 80.7 700.8 8.6 33.7 18.1 66.3 28.5 97.1 21 62 45.7 116.7 74.8 159.2 3.3 4.8 6.7 9.6 10 14.4z"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M788.8 1513.1s-64.7 37.5-43.7 172.5H637.3"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M1103 1514.4s64 36.2 43 171.2h106.4"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M687 1399.5l47.9-8.4 192.1-33.6 226 38.5 56 9.5"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M783 1135.5l39.8-11.5 95.2-27.5 121.7 28.8 43.3 10.2"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M768.4 1229.8l27.7-8 121.9-35.3 150.2 35.8 20.4 4.9"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M927 316.5v-99"
          />
        </g>
      </g>
    </svg>
  ),
  "id-4": (
    <svg viewBox="0 0 64 64">
      <g>
        <g>
          <circle fill="none" cx="32" cy="32" r="32" />
        </g>
        <g>
          <path
            fill="#fff"
            d="M10,26.5c-0.276,0-0.5-0.224-0.5-0.5v-5c0-0.276,0.224-0.5,0.5-0.5h15c0.205,0,0.388,0.125,0.464,0.314l1.2,3    c0.103,0.256-0.022,0.547-0.279,0.65c-0.255,0.102-0.547-0.022-0.65-0.279L24.662,21.5H10.5V26C10.5,26.276,10.276,26.5,10,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M10,34.5c-0.276,0-0.5-0.224-0.5-0.5v-8c0-0.276,0.224-0.5,0.5-0.5h18c0.189,0,0.362,0.107,0.447,0.276l3,6    c0.124,0.247,0.023,0.547-0.224,0.671c-0.247,0.123-0.546,0.024-0.671-0.224L27.691,26.5H10.5V34C10.5,34.276,10.276,34.5,10,34.5    z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M39,42.5H10c-0.276,0-0.5-0.224-0.5-0.5v-8c0-0.276,0.224-0.5,0.5-0.5h24c0.173,0,0.333,0.089,0.424,0.235    l5,8c0.097,0.154,0.102,0.349,0.014,0.507C39.35,42.401,39.182,42.5,39,42.5z M10.5,41.5h27.598l-4.375-7H10.5V41.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M46,50.5c-0.166,0-0.329-0.083-0.424-0.235L40.723,42.5H10.5V50c0,0.276-0.224,0.5-0.5,0.5S9.5,50.276,9.5,50    v-8c0-0.276,0.224-0.5,0.5-0.5h31c0.173,0,0.333,0.089,0.424,0.235l5,8c0.146,0.234,0.075,0.543-0.159,0.689    C46.183,50.476,46.091,50.5,46,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M18,50.5c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.449-1-1-1s-1,0.449-1,1V50c0,0.276-0.224,0.5-0.5,0.5    s-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V50C18.5,50.276,18.276,50.5,18,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M25,50.5c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.449-1-1-1s-1,0.449-1,1V50c0,0.276-0.224,0.5-0.5,0.5    s-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V50C25.5,50.276,25.276,50.5,25,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M32,50.5c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.449-1-1-1s-1,0.449-1,1V50c0,0.276-0.224,0.5-0.5,0.5    s-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V50C32.5,50.276,32.276,50.5,32,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M39,50.5c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.448-1-1-1s-1,0.449-1,1V50c0,0.276-0.224,0.5-0.5,0.5    s-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V50C39.5,50.276,39.276,50.5,39,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M52,50.5c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.551-0.448-1-1-1s-1,0.449-1,1V50c0,0.276-0.224,0.5-0.5,0.5    s-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V50C52.5,50.276,52.276,50.5,52,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M52,44.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V44    C52.5,44.276,52.276,44.5,52,44.5z M49.5,43.5h2v-2c0-0.551-0.448-1-1-1s-1,0.449-1,1V43.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M18,34.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V34    C18.5,34.276,18.276,34.5,18,34.5z M15.5,33.5h2v-2c0-0.551-0.449-1-1-1s-1,0.449-1,1V33.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M25,34.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V34    C25.5,34.276,25.276,34.5,25,34.5z M22.5,33.5h2v-2c0-0.551-0.449-1-1-1s-1,0.449-1,1V33.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M18,42.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V42    C18.5,42.276,18.276,42.5,18,42.5z M15.5,41.5h2v-2c0-0.551-0.449-1-1-1s-1,0.449-1,1V41.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M25,42.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V42    C25.5,42.276,25.276,42.5,25,42.5z M22.5,41.5h2v-2c0-0.551-0.449-1-1-1s-1,0.449-1,1V41.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M32,42.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V42    C32.5,42.276,32.276,42.5,32,42.5z M29.5,41.5h2v-2c0-0.551-0.449-1-1-1s-1,0.449-1,1V41.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M46,38.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V38    C46.5,38.276,46.276,38.5,46,38.5z M43.5,37.5h2v-2c0-0.551-0.448-1-1-1s-1,0.449-1,1V37.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M52,38.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-1.103,0.897-2,2-2s2,0.897,2,2V38    C52.5,38.276,52.276,38.5,52,38.5z M49.5,37.5h2v-2c0-0.551-0.448-1-1-1s-1,0.449-1,1V37.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M39,42.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-2.5c0-0.665,0.329-1.285,0.88-1.657    c0.111-0.077,0.252-0.104,0.384-0.075c0.133,0.028,0.248,0.109,0.32,0.224l2.34,3.743c0.097,0.154,0.102,0.349,0.014,0.507    C39.35,42.401,39.182,42.5,39,42.5z M36.5,41.5h1.598l-1.509-2.413C36.531,39.214,36.5,39.355,36.5,39.5V41.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M46,50.5c-0.166,0-0.329-0.083-0.424-0.235l-1.987-3.178C43.531,47.214,43.5,47.355,43.5,47.5V50    c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-2.5c0-0.665,0.329-1.285,0.88-1.657c0.111-0.076,0.251-0.103,0.384-0.075    c0.133,0.028,0.248,0.109,0.32,0.224l2.34,3.743c0.146,0.234,0.075,0.543-0.159,0.689C46.183,50.476,46.091,50.5,46,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M54,50.5c-0.276,0-0.5-0.224-0.5-0.5V38.5H40c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h14    c0.276,0,0.5,0.224,0.5,0.5v12C54.5,50.276,54.276,50.5,54,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M56,44.5H45c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h11c0.276,0,0.5,0.224,0.5,0.5S56.276,44.5,56,44.5    z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M56,38.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-8.5H33c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h21    c0.276,0,0.5,0.224,0.5,0.5v8.5H56c0.276,0,0.5,0.224,0.5,0.5S56.276,38.5,56,38.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M56,32.5H36c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h20c0.276,0,0.5,0.224,0.5,0.5S56.276,32.5,56,32.5    z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M15,26.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2    C15.5,26.276,15.276,26.5,15,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M12,26.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2    C12.5,26.276,12.276,26.5,12,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M12,34.5c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4    C12.5,34.276,12.276,34.5,12,34.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M12,42.5c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4    C12.5,42.276,12.276,42.5,12,42.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M12,50.5c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4    C12.5,50.276,12.276,50.5,12,50.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M18,26.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2    C18.5,26.276,18.276,26.5,18,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M21,26.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2    C21.5,26.276,21.276,26.5,21,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M24,26.5c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2    C24.5,26.276,24.276,26.5,24,26.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M43,42.5H8c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h35c0.276,0,0.5,0.224,0.5,0.5S43.276,42.5,43,42.5z    "
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M36,34.5H8c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h28c0.276,0,0.5,0.224,0.5,0.5S36.276,34.5,36,34.5z    "
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M30,26.5H8c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h22c0.276,0,0.5,0.224,0.5,0.5S30.276,26.5,30,26.5z    "
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M23,14.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-1c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v1    c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-0.5c0-0.551-0.449-1-1-1s-1,0.449-1,1V14c0,0.276-0.224,0.5-0.5,0.5H8    c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2.5c0-1.103,0.897-2,2-2c0.441,0,0.85,0.144,1.181,0.387    C14.147,10.501,15.459,9.5,17,9.5c1.93,0,3.5,1.57,3.5,3.5v0.5H23c0.276,0,0.5,0.224,0.5,0.5S23.276,14.5,23,14.5z"
          />
        </g>
        <g>
          <path
            fill="#fff"
            d="M56,21.5h-7c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5S56.276,21.5,56,21.5z"
          />
        </g>
      </g>
    </svg>
  ),
  "id-5": (
    <svg viewBox="0 0 203.54 442.66">
      <g>
        <g>
          <path
            fill="#fff"
            d="M52,139.7a5.51,5.51,0,0,0,5.4-6.36c-3.05-18.56-4-40.28-4.17-55.22a5.48,5.48,0,0,0-5.47-5.39H47.7a5.46,5.46,0,0,0-5.38,5.55c.22,15.32,1.15,37.61,4.31,56.84A5.48,5.48,0,0,0,52,139.7Z"
          />
          <path
            fill="#fff"
            d="M46.73,55.36a5.47,5.47,0,0,0-5.46-5.47H16.11a5.47,5.47,0,0,0,0,10.94H41.27A5.47,5.47,0,0,0,46.73,55.36Z"
          />
          <path
            fill="#fff"
            d="M28.66,66.45a5.45,5.45,0,0,0-5.46,5.36L23,82.06a5.46,5.46,0,0,0,5.36,5.57h.11a5.46,5.46,0,0,0,5.46-5.36L34.13,72a5.47,5.47,0,0,0-5.36-5.57Z"
          />
          <path
            fill="#fff"
            d="M39.48,1.51A5.46,5.46,0,0,0,34.32.18c-.61.16-15.2,4.11-22.3,19l-.18.38a19.41,19.41,0,0,0,2.88,20.71,5.47,5.47,0,0,0,8.36-7,8.59,8.59,0,0,1-1.28-9.16l.12-.26a24.73,24.73,0,0,1,8.17-9.58,16.57,16.57,0,0,0,2,5.78l.14.23c2,3.38,5.75,9.66,3.4,13.65a5.47,5.47,0,0,0,9.43,5.54c5.62-9.56-.73-20.22-3.44-24.78l-.13-.23c-1-1.73-.87-5.71-.43-7.83A5.48,5.48,0,0,0,39.48,1.51Z"
          />
          <path
            fill="#fff"
            d="M80.08,221.48l1.21-1.17a5.47,5.47,0,1,0-7.61-7.85l-1.2,1.16a5.47,5.47,0,1,0,7.6,7.86Z"
          />
          <path
            fill="#fff"
            d="M0,437.19a5.47,5.47,0,0,0,5.47,5.47H168.82a5.47,5.47,0,1,0,0-10.93H150.27v-9.18a18.66,18.66,0,0,0-18.64-18.64h-.12l-6.33-95.11a25.31,25.31,0,0,0,6.68-17.13V276.35h0l36-38.88L188,254.34a6.65,6.65,0,0,1,.58,9.65l-30.9,33a6.6,6.6,0,0,1-9.28.41,5.47,5.47,0,0,0-7.29,8.16,17.48,17.48,0,0,0,24.54-1.09l30.9-33A17.57,17.57,0,0,0,195,246l-24.11-20.23a5.46,5.46,0,0,0-7.52.48l-31.51,34V242.41c.22.26.42.54.64.79a5.46,5.46,0,1,0,8.23-7.19,63,63,0,0,1-8-11.95,5.27,5.27,0,0,0-.83-1.15v-11a39.22,39.22,0,0,0-22.75-35.64c-1.42-.65-2.79-1.3-4.13-2,5.88-4.06,9.3-11,9.3-20V131.77l7.38.09h.07a5.47,5.47,0,0,0,.07-10.93l-8.15-.11a21.82,21.82,0,0,0-2.15-5.55l5.8-7.15a5.46,5.46,0,1,0-8.48-6.89l-4.92,6a21.87,21.87,0,0,0-6.25-2.68V97.3a5.47,5.47,0,1,0-10.93,0v7.3a21.87,21.87,0,0,0-6.25,2.68l-4.92-6a5.47,5.47,0,0,0-8.48,6.9l5.8,7.14a22.19,22.19,0,0,0-2.16,5.6l-2.74.06a5.47,5.47,0,0,0,.13,10.93h.13l1.85,0v20A55.08,55.08,0,0,1,64.35,146a5.47,5.47,0,0,0-9.27,1c-3.54,7.43-10.34,12.89-15.6,16.24a120.8,120.8,0,0,1-5.44-37v-25.3a5.47,5.47,0,1,0-10.93,0v25.3a130.21,130.21,0,0,0,6.7,42.47c-3.7,2.79-8.06,8.4-6.29,16.16,1.71,7.52,9,10.7,14.06,12V226a18.32,18.32,0,0,0,2.06,24.37c-.1,10.13-.79,26.48-2,48.66a5.46,5.46,0,1,0,10.91.62c1.29-22.63,2-39.28,2.08-49.58L66.1,235a5.47,5.47,0,0,0-7.61-7.85l-13.11,12.7a7.64,7.64,0,0,1-.52-2,7.46,7.46,0,0,1,2-5.9l.12-.12L79.41,199.5a5.47,5.47,0,1,0-7.72-7.74L48.51,214.84V192.32a5.47,5.47,0,0,0-5-5.45c-3-.25-8.76-2-9.32-4.42-.7-3,1.89-4.86,2.63-5.31,2.33-1,15.58-7.16,24.16-18.82,6.73,6.38,20.36,17.29,43.59,27.92a28.28,28.28,0,0,1,16.37,25.7v79.73a14.43,14.43,0,0,1-5,10.87L92.6,322.86l16.2-60.25a5.47,5.47,0,0,0-10.56-2.84L77.39,337.32A12,12,0,0,0,82,353l4.77,2.85a1.07,1.07,0,0,1,.54.92,1.1,1.1,0,0,1-.49,1L46.16,385A2,2,0,0,1,43,383.16c.7-9.68,1.76-24.69,2.85-41.25a5,5,0,0,0-.11-1.41l33.74-62.8a5.47,5.47,0,0,0-9.63-5.17l-40.46,75.3a5.46,5.46,0,0,0,2.23,7.4,5.55,5.55,0,0,0,2.34.64c-.72,10.55-1.38,19.81-1.86,26.5a12.84,12.84,0,0,0,6.41,12.12l.12.06L38,403.91h-.16a18.66,18.66,0,0,0-18.64,18.64v9.18H5.47A5.46,5.46,0,0,0,0,437.19ZM92.18,114.82a11.18,11.18,0,0,1,11.16,10.91,21.86,21.86,0,0,0-22.31,0A11.18,11.18,0,0,1,92.18,114.82ZM81,159.83V144.77a11.17,11.17,0,1,1,22.33,0v9.59c0,8.45-3.9,12.8-11.57,13-4.11-2.41-7.71-4.75-10.82-6.93A5.51,5.51,0,0,0,81,159.83ZM30.11,422.55a7.71,7.71,0,0,1,7.7-7.71H84.52a5.47,5.47,0,1,0,0-10.93H48.93l.63-8.51a13,13,0,0,0,2.69-1.35l40.63-27.24a12,12,0,0,0-.53-20.34l-4.77-2.84a1.1,1.1,0,0,1-.54-.85,1.07,1.07,0,0,1,.38-.93L114.84,318l5.71,85.9h-6.46a5.47,5.47,0,0,0,0,10.93h17.54a7.71,7.71,0,0,1,7.7,7.71v9.18H30.11Z"
          />
          <path
            fill="#fff"
            d="M190.27,437.19a5.46,5.46,0,0,0,5.46,5.47h2.35a5.47,5.47,0,0,0,0-10.93h-2.35A5.45,5.45,0,0,0,190.27,437.19Z"
          />
        </g>
      </g>
    </svg>
  ),
};

export const CHECK_ICON = (
  <svg viewBox="0 0 32 32">
    <g id="chevron-bottom">
      <line
        className="cls-1"
        x1="16"
        x2="7"
        y1="20.5"
        y2="11.5"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2px"
      />
      <line
        className="cls-1"
        x1="25"
        x2="16"
        y1="11.5"
        y2="20.5"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2px"
      />
    </g>
  </svg>
);