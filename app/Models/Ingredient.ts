import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ingredient extends BaseModel {
  @column()
  public name: string

  @column()
  public stock: number

  @column()
  public price: number

}
