import { createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:wght@500&display=swap');
        font-family: 'Noto Sans KR', sans-serif;
        font-family: 'Poppins', sans-serif;
        color: #3b3b3b;
    }
`;

export default GlobalStyle;