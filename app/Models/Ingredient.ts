import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Plat from './Plat'

export default class Ingredient extends BaseModel {
  @column()
  public name: string

  @column()
  public stock: number

  @column()
  public price: number

  @manyToMany(() => Plat)
  plats: Plat[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}