import React, { useContext } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { themeProviders } from '../../Context/ThemeProvider';

function Content() {
    const {theme} = useContext(themeProviders);

    return (
        <div className={theme}>
            
            <h3 className='my-3'>Không sử dụng useContext</h3>

            < Paragraph />
        </div>
    );
}

export default Content;