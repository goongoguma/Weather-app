- src

  - 메인 index.js

    - Provider from 'react-redux'
    - createStore from 'redux'
    - thunk from 'redux-thunk'
    - App from App.js

  - actions

    - actionIndex.js
    - import api from api.js

  - reducers

    - reducerIndex.js
    - combineReducer from 'redux'

  - components

    - App.js

      - HandleCitySearch from HandleCitySearch.js

    - HandleCitySearch.js

      - onFormSubmit
      - import connect from 'react-redux'
      - HandleGoogleMap from HandleGoogleMap.js
      - HandleCityResult from HandleCityResult.js
      - HandleGoogleMap.js
      - HandleCityResult.js

    - HandleGoogleMap.js

      - 구글맵

    - HandleCityResult.js
      - 검색한 정보들을 배열의 형태로 저장해서 화면에 보여줘야함

  - api
    - api.js
    - axios from 'axios'
    - 날씨정보들을 가져와야함

* HandleCitySearch 컴포넌트는 HandleGoogleMap과 HandleCityResult 컴포넌트를 포함하며 검색키워드를 담당한다.

* 검색 키워드에 따라 액션에 있는 axios의 get 결과도 달라져야 하므로 connect로 HandleCitySearch 컴포넌트를 이어준다.

* 검색창에 키워드를 친다 -> 키워드를 axios를 이용해 검색 데이터를 가져온다 -> 데이터를 가져와서 action이 발동 -> reducer가 action.payload로 state를 변경 -> mapStateToProps로 필요한 정보를 가져와 뿌리기
