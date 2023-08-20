import React from 'react';

function ProductItem(props) {
    const {product} = props
    return ((
        <tr>
                    <td className="text-center">{product.id}</td>
                    <td style={{maxWidth: '150px', textAlign: 'center'}}>
                        <img src={product.avatar.fileUrl} style={{width: '40%', aspectRatio: '3/2', objectFit: 'contain'}} alt=''/>

                    </td>
                    <td>{product.title}</td>
                    <td className="text-end ">{product.price}</td>
                    <td className="text-center">{product.description}</td>
                    <td className="text-center">{product.category.code}</td>
                    <td>
                        <div className="d-flex justify-content-center">                          
                            <button className="btn btn-outline-secondary btn-sm edit" data-id="">
                                <i className="fas fa-edit"></i></button>
                            <button  className="btn btn-outline-danger btn-sm delete" data-id="">
                                <i className="fas fa-ban"></i></button>
                        </div>
                    </td>
                </tr>
    ));
}

export default ProductItem;