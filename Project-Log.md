# Weather-app project log

- 주제 : 리덕스를 사용해 날씨앱 만들어보기
- React, Redux, React-Redux, Redux-Thunk, Axios, google-maps-react 사용

## 2018 / 01 / 29

### App Overview

- input에 도시 이름을 입력한뒤 search 버튼을 누르면 axios를 이용해 https://openweathermap.org/api에 요청을 보내 각 도시별 날씨 정보 가져온다.
- api에서 가져온 정보들은 리덕스를 이용해 액션 -> 리듀서의 순서로 진행되며 리듀서에서 배열의 형태인 state에 저장되어진다.
- state에 저장이된 정보들은 mapStateToProps에서 필요한 정보들만을 추출해내어 HandleCitySearch 컴포넌트의 자식컴포넌트들인 HandleCityResult와 HandleGoogleMap 컴포넌트에 각각 보내지게 된다.
- HandleCityResult 컴포넌트에는 전반적인 도시 날씨의 정보를 props로 받으며 HandleGoogleMap 컴포넌트는 검색한 도시의 위도와 경도값을 props로 받는다.
- 도시 이름을 검색하게되면 구글맵 라이브러리에 위도와 경도값이 새로 입력이 되어 지도가 해당 도시로 이동한다.
- 또한 구글맵 하단에 도시의 이름과 현재날씨, 온도, 습도 정보가 나오게된다.

### 첫번째 어려움 : 리듀서를 이용하여 state 배열에 인덱스 제거하기

- 처음에 인덱스를 제거하기 위해 state에 배열에서 인덱스를 제거하는 listDelete 액션을 만들어준뒤 리듀서도 따로 만들어주었다.
- 생각해보니 하나의 배열인 state를 조작해야하는데 굳이 두개의 리듀서가 필요없다고 생각해서 하나의 리듀서로 통합시켰다.
- state가 오염되면 안되기때문에 filter 메소드를 사용해 선택된 해당 인덱스를 제외한 새로운 배열을 생성하게 만들었다.
- 그런데 버그가 발생하여 이리저리 수정해보았지만 계속해서 버그가 발생한다. 혹시모를 오타를 의심하고 다시한번 살펴본결과 역시나 오타가 때문에 발생되어 생긴 버그였다.

### 두번째 어려움 : 구글맵에 위도 및 경도 보내준뒤 지도 렌더링하기

- HandleCityResult에서 위도와 경도를 HandleGoogleMap 컴포넌트에 props로 내려주었다.
- 하지만 지도는 계속해서 위도:0, 경도:0 인 장소를 렌더링한다.
- 분명 콘솔에는 숫자가 나오는데 왜 인식을 못할까 생각을 했으나 답을 찾지못해 stackoverflow에 질문을 했다. ☞ [link](https://stackoverflow.com/questions/54412294/google-maps-react-value-of-props-passed-by-parent-component)
- 알고보니 문제는 api에 요청한 데이터를 가져오기전에 컴포넌트가 먼저 렌더링을 해버리는, 비동기의 특성을 생각하지 못한 문제였다.
- 설명서에 나와있는데로 로딩이 될때 장소를 설정하는 initialCenter 프로퍼티가 아닌 초기 렌더링 이후 지도가 다시 렌더링 되기위해 사용되는 center 프로퍼티를 사용함으로써 문제를 해결하였다.

### 세번째 어려움 : 구글맵 사이즈 설정

- 이제 도시 이름을 입력한뒤 버튼을 누르면 지도가 해당 장소로 이동한다.
- 문제는 구글맵 라이브러리에 있는 css때문에 지도가 앱의 화면 대부분을 차지한다.
- 화면을 줄여주기위해 style 프로퍼티를 썼지만 구글맵을 감싸고 있는 또 하나의 내장된 div 태그에 다양한 스타일이 있어 지도의 크기만 달라질뿐 구글맵의 부모 태그가 화면을 여전히 차지하고있다.
- 부모 div 태그의 사이즈를 어떻게 조절할 수 있을까 생각하다가 새로운 div태그를 만들어 해당 부모 div태그를 감싸주었으나 작동하지 않는다.
- 학원 마지막 프로젝트때 구글맵을 사용한것을 기억하고 fastplate에서 구글맵을 담당하는 컴포넌트를 살펴본뒤에 문제를 알게되었다.
- 맵을 감싸고있는 부모태그는 position:absolute다 즉, 높이를 잃어버린것이다.
- fastplate 프로젝트에서는 부모의 부모태그를 만든뒤 그 태그에도 position:absolute 값을 할당함으로써 문제를 해결했다.
- 같은방식으로 문제를 해결할 수 있었다.
