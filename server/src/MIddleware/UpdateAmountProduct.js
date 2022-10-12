import { ProductModel } from "../Model/ProductShema.js";
import nodemailer from "nodemailer"

export const handleUpdateAmountProduct = async (req, res, next) => {
    req.body.buy.map(async (item) => {
    try {
        const update = await ProductModel.findById(
        { _id: item._id })
        Object.assign(update,{...update,buyCount : update.buyCount + item.amount})
        await update.save()
    } catch (error) {if(error) {res.status(200).json({ success: false })} }
    })
    next()
};


export const checkPay = async (req,res,next) =>{
    const  { email , buy} = req.body
    const money = buy.reduce((total,num) => total + num.price*num.amount ,0)
    try {
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth: {
              user: "devwebdainghia@gmail.com", 
              pass: "Ngiad127", 
            },
        })
        
        await transporter.sendMail({
            from: 'devwebdainghia@gmail.com', 
            to: `${email}`, 
            subject: "Chúng tôi là Shop hoa quả sấy dẻo", 
            text: ` Vui lòng thanh toán đơn hàng. Số tiền cần thanh toán là : ${money} đ  .Chuyển khoảng vào : MBBANK : 1238882001888 TRAN DAI NGHIA .   `,
          },(err) => {
            if(err) res.status(500).json({success: false})
          })
        next()
    } catch (error) {
        res.status(200).json({ success: false })
    }

}




