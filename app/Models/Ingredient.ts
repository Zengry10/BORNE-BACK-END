import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Plat from './Plat'

export default class Ingredient extends BaseModel {
  @column()
  public name: string

  @column()
  public stock: number

  @column()
  public price: number

  @manyToMany(() => Plat)
  public plats: ManyToMany<typeof Plat, LucidModel>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}