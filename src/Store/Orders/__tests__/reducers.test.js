import {ordersReducer} from "../reducers";


describe("Order reducer", ()=>{

    it("Return the default state when no action type is given",()=>{
        
        const expected = {
            someObject : ""
        }
        expect(ordersReducer(expected,{})).toEqual(expected)
    })


    it("add orders to list of orders",()=>{
        
    })
})
