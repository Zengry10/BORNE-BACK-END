import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Burger from './Burger'
import Complement from './Complement'
import Drink from './Drink'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public stock: number

  // @column()
  // public picture: string

  @column()
  public price: number

  @manyToMany(() => Burger, {
    pivotTable: 'create_burger_ingredient_tables',
  })
  public burgers: ManyToMany<typeof Burger>


  @manyToMany(() => Drink, {
    pivotTable: 'create_drink_ingredient_tables',
  })
  public drinks: ManyToMany<typeof Drink>


  @manyToMany(() => Complement, {
    pivotTable: 'create_complement_ingredient_tables',
  })
  public complements: ManyToMany<typeof Complement>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
