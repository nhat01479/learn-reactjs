import React, { useContext } from 'react';
import { themeProviders } from '../../Context/ThemeProvider';

function Paragraph() {
    const {theme, handleChangeTheme} = useContext(themeProviders);
    return (
        <>
            <p className={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quibusdam molestias nulla ratione eius, 
                unde aliquam magnam eos velit, est quaerat rem. Ad, aliquid consequuntur vitae molestias laudantium accusantium 
                repellat provident, animi velit eveniet minus. Dicta qui repudiandae exercitationem officiis rem, laudantium et 
                autem atque labore amet quae veniam, aut esse nam aspernatur unde nemo similique quod facilis minus fuga nesciunt. 
                Consequuntur quos maxime tempora tenetur fugit quas eveniet provident culpa repudiandae magni fugiat aut ad non 
                deserunt, maiores ducimus illum laudantium facere vero temporibus sed vel necessitatibus molestias asperiores. 
                Voluptatem quia ipsum repudiandae eveniet quos deleniti delectus, suscipit quibusdam voluptas velit, minus 
                laudantium blanditiis omnis. Impedit, autem obcaecati! Iste quod, quasi quo aut perferendis ipsa repudiandae, 
                fugit laborum necessitatibus autem sint excepturi exercitationem! Laudantium a suscipit facere alias vel 
                reprehenderit expedita porro ducimus, iure, magni eveniet dolores accusantium fugiat molestias necessitatibus 
                culpa? Sunt repellat sapiente commodi ullam, officiis totam laborum sequi, assumenda doloribus sint voluptatum 
                id omnis voluptatem. Quos aperiam nostrum amet quae earum nam ipsa libero veniam natus velit. Provident optio 
                fuga asperiores iste earum rem pariatur, ut odio natus deleniti molestiae ratione. Nemo corporis atque mollitia 
                nam doloremque dolorem architecto. Iste adipisci fugit maxime accusantium ab non.
            </p>
            <button className="btn btn-sm btn-secondary"
                onClick={handleChangeTheme}
            >Change Theme</button>
        </>
    );
}

export default Paragraph;