import userModel from "../models/userModel.js";

// add items in to cart


const addToCart = async (req, res) => {
       try {
          let userData = await userModel.findOne({ _id:req.userId});
          let cartData = await userData.cartData;
          if (!cartData[req.body.itemId]) 
        {
             cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{ cartData});
            res.json({ success: true, message: "Item added to cart" });
         
       } catch (error) {
          console.log(error);
          res.json({ success: false, message: "Error" });
       }
}


// remove items from cart

const removeItems = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id:req.body.userId});
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]> 0) {
            cartData[req.body.itemId] -= 1;
        }
            await userModel.findByIdAndUpdate(req.body.userId,{ cartData});
            res.json({ success: true, message: "Item removed from cart" }); 
    } catch (error) {
        console.log(error);
        res.json({success: false, message: ""})
    }
}
    
// fetch user cart items

const getCartItems = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id:req.body.userId});
        let cartData = await userData.cartData;
        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}




export { addToCart, removeItems, getCartItems };