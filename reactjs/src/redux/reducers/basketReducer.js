import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

async function RetriveAllProducts() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let data = [];
    try {
        const response = await fetch("http://web-store.ddns.net:5000/SanPham/Search", requestOptions);
        if (!response.ok)
            throw Error(response.statusText);
        data = response.json();
    } catch (error) {
        console.log(error);
    }
    return data;
}


async function LoadDataFromBackend() {
    const templistproduct = await RetriveAllProducts();
    const productsData = templistproduct.result;
    const products = [];
    productsData.forEach(product => {
        products.push({
        name: product.name,
        price: product.price,
        numbers: 0,
        inCart: false,
        piclink: product.image,
      });
    });
    return { products: products};
  }

  const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.name] = item
    return obj
  }, {})


  var a = 10;

async function titleproduct() {
const productsData = await LoadDataFromBackend();
const peopleObject = arrayToObject(productsData.products)
return await peopleObject;
}
  
((async () => {
    a = await titleproduct();
})()).catch(console.error)

var initialState = null;
 
 function createinitialState(a){
    initialState =  {
    basketNumbers: 0,
    cartCost: 0,
    products: a,
}
return initialState
 }

var i=0;

export default (state = initialState, action) => {if(i<4) {state = createinitialState(a); i++;}
let productSelected ="";
switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers +=1;
            productSelected.inCart = true;
            
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case GET_NUMBERS_BASKET:
            return {...state}
        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers +=1
            return {...state,
            basketNumbers: state.basketNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products:{
                ...state.products,
                [action.payload]: productSelected
            }
            } 
        case DECREASE_QUANTITY:         
            productSelected = {...state.products[action.payload]}
            let newcartCost = 0;
            let newbasketNumbers = 0;
            if(productSelected.numbers ==1)
            {productSelected.numbers=1; newcartCost= state.cartCost; newbasketNumbers = state.basketNumbers;} 
            else {productSelected.numbers -=1; newcartCost =  state.cartCost - state.products[action.payload].price;
            newbasketNumbers = state.basketNumbers -1;
            }
             
            return {...state,
            basketNumbers: newbasketNumbers,
            cartCost:newcartCost,
            products:{
                ...state.products,
                [action.payload]: productSelected
            }
            }

        case CLEAR_PRODUCT:         
            productSelected = {...state.products[action.payload]}
            let numbersBackup = productSelected.numbers;
            productSelected.numbers=0;
            productSelected.inCart=false;
            
            return {...state,
            basketNumbers: state.basketNumbers - numbersBackup,
            cartCost: state.cartCost - (numbersBackup * productSelected.price),
            products:{
                ...state.products,
                [action.payload]: productSelected
            }
            }
           
        default:
            return state;
    }
}