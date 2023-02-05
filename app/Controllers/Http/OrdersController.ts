import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorOrder from '../../Validators/Admin/OrderValidator'
import Order from '../../Models/Order'
import '@adonisjs/websocket/build/adonis-websocket-client'
import { use } from '@adonisjs/websocket-client'
import { Server } from 'socket.io'
import Ws from 'App/Services/Ws'


export default class OrdersController {


    public async createOrder({ request, response }: HttpContextContract) {

      const payload = await request.validate(ValidatorOrder)

      const order = await Order.create(payload)
  
      // Emit an event to notify about a new order
      Ws.io.emit('newOrder', order)
  
      return response.created(order)
    }
  
      public async getOrders ({ response }: HttpContextContract) { 
        const orders = await Order.all()
        return response.ok(orders)
      }
}

