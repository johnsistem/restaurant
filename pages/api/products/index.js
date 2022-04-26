import dbConnect from "../../../util/mongo.js"
import Product from "../../../models/Product.js"
//import Order from "../../../models/Order.js"


export default async function handler(req, res) {
   /* res.status(200).json({ name: "Products" }); */
   const { method } = req;

   dbConnect()


   if (method === 'GET') {
      const products =await Product.find();
      res.status(200).json(products);
   }
   if (method === "POST") {

      try {
        
        const product = await Product.create(req.body);
        req.status(201).json(product);

     } catch (err) {

        res.status(500).json(err);

     }
   }

}
