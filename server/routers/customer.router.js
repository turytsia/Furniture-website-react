import { Router } from 'express'
import { addCustomer, removeCustomer, getCustomers } from '../controllers/customer.controller.js'
const router = Router()

router.route('/')
    .get(getCustomers)
    .post(addCustomer)

router.delete('/:id', removeCustomer)

export default router