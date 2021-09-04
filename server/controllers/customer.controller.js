import customerModel from "../models/customer.js";
export async function getCustomers(req, res) {
    try {
        const customers = await customerModel.find()
        res.status(200).json({ success: true, customers })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}
export async function addCustomer(req, res) {
    const { email, name, message } = req.body
    try {
        if (await customerModel.findOne({ email }))
            throw new Error('You have already sent your contact details')
        const customer = new customerModel({ email, name, message })
        await customer.save()

        res.status(200).json({ success: true })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}
export async function removeCustomer(req, res) {
    const id = req.params.id
    try {
        await customerModel.findByIdAndRemove(id)
        const customers = await customerModel.find()
        res.status(200).json({ success: true, customers })
    } catch (err) {
        res.status(200).json({ success: false, message: err.message })
    }
}