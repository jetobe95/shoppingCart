import React from 'react'
import uid from 'uid'
import { connect } from 'react-redux'
import { deleteProductAction } from '../redux/actions';





const List = ({ productsList,deleteProduct }) => {
  return (
    <ul className="list">
      {productsList.map((products) =>
        <li key={uid(10)}>{products.title} <br />
          <span>Precio: {`${products.currency_id}-${products.price}`}</span>
          <button onClick={() => deleteProduct(products)}>Eliminar</button>
        </li>
      )}
    </ul>
  )
}

// mapStateToProps obtiene los datos del estado
const mapStateToProps = (state) => {  
  // y devolvemos las nuevas props
  return {
    reducerList: state.reducerList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct(product) {
      dispatch(deleteProductAction(product));
    }
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(List);

 



 