import prisma from "../db"
export const getProducts = async(req,res) => {
    //get the products against the user id
    const user = await prisma.user.findUnique({
        where:{
            id:req.user.id
        },
        include:{
            Product:true
        }
    })
    res.send(user.Product)

}

export const getProduct = async(req,res) => {
    const {id} = req.params;
    const product = await prisma.product.findUnique({
        where:{
            id:id
        }
    })
    res.send(product)
}   

export const updateProduct = async(req,res) =>
{
    const {id} = req.body
    const product = await prisma.product.update({
        where:{
            id:id
        },
        data:{
            name:req.body.name,
        }
    })

}

export const deleteProduct = async(req,res) =>
{
    const {id} = req.params
    const product = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: id,
                belongsToId: req.user.id
            }

        }
      });
    res.send({message:"Product deleted successfully"})
}