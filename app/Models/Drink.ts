import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
// import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import Menu from './Menu'
import Ingredient from './Ingredient'

export default class Drink extends BaseModel {

  @column({ isPrimary: true })

  public id: number
  
  @column()
  public name: string

  @column()
  public stock: number

  @column()
  public picture: string

  @column()
  public price: number


  @manyToMany(() => Menu, {
    pivotTable: 'create_menu_drink_tables',
  })
  public menus: ManyToMany<typeof Menu>


  @manyToMany(() => Ingredient, {
    pivotTable: 'create_drink_ingredient_tables',
  })
  public ingredients: ManyToMany<typeof Ingredient>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}