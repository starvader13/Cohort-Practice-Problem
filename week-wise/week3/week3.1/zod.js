const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json());

const schema = zod.array(zod.number());

/*
{
    email: string email
    password: atleast 8 characters
    country: "IN", "US"
}
*/

const authSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.post("/health-checkup", (req,res)=>{
    const body = req.body;
    const response = authSchema.safeParse(body);
    if(!response.success){
        return res.status(411).json({
            msg: "invalid input"
        })
    }
    res.send({
        response
    })
})

app.listen(3000); 