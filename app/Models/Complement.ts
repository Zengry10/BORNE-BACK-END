import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Menu from './Menu'



export default class Complement extends BaseModel {
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
    pivotTable: 'create_menu_complement_tables',
  })
  public menus: ManyToMany<typeof Menu>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
