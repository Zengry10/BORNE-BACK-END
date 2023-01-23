import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { LucidModel } from '@ioc:Adonis/Lucid/Orm'
import Ingredient from './Ingredient'

export default class Plat extends BaseModel {
    @column()
    public name: string

    @column()
    public description: string

    @column()
    public price: number

    @manyToMany(() => Ingredient, {
    pivotTable: 'plats_ingredients',
    })
    public ingredients: ManyToMany<typeof Ingredient, LucidModel>

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}