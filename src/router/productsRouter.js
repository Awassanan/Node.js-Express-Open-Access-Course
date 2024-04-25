import express from 'express';
const productsRouter = express.Router();
import products from '../data/products.json' with { type: 'json' };

// productRouter.route("/").get((req, res) => {
//     // res.send("Hello World !!, I'm Product")
//     res.render("products")
// })

// productRouter.route("/").get((req, res) => {
//     res.render("products", {
//         products: [
//             { title: "ซันไลต์ถนอมมือ", description: "คลีน แอนด์ แคร์", price: 50 },
//             { title: "ไลปอนเอฟมะกรูด", description: "800 มล.กลิ่นมะกรูด แพ็คคู่", price: 69 },
//             { title: "ไลปอนเอฟส้ม", description: "800 มล.กลิ่นเจแปนนีส ยูซุ แพ็คคู่", price: 69 },
//             { title: "ทีโพลเพียว", description: "หอม สะอาด จานวิ้ง ๆ", price: 45 },
//         ]
//     });
// });

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products
    },
    );
});


// productRouter.route("/1").get((req, res) => {
//     res.send("Hello World !!, I'm Product 1")
// })

// productRouter.route("/:id").get((req, res) => {
//     const id = req.params.id
//     res.send("Hello World !!, I'm Product " + id)
// })

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id
    res.render("product", {
        product: products[id],
    })
})

// module.exports = productsRouter;
export default productsRouter ;