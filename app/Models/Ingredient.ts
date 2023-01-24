import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
// import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import Plat from './Plat'

export default class Ingredient extends BaseModel {

  @column({ isPrimary: true })

  public id: number
  
  @column()
  public name: string

  @column()
  public stock: number

  @column()
  public price: number

  @manyToMany(() => Plat, {
    pivotTable: 'create_plat_ingredient_tables',
  })
  public plats: ManyToMany<typeof Plat>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}