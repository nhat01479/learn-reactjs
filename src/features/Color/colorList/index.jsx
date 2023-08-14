import React from 'react';
import ColorBox from '../colorbox';



function ColorList() {

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<ColorBox color="red" className="col-6"></ColorBox>
				<ColorBox color="yellow" className="col-6"></ColorBox>
				<ColorBox color="blue" className="col-6"></ColorBox>
				<ColorBox color="red" className="col-6"></ColorBox>
				<ColorBox color="yellow" className="col-6"></ColorBox>
				<ColorBox color="blue" className="col-6"></ColorBox>
			</div>
		</div>
    );
}

export default ColorList;