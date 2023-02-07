import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
export default class extends BaseSeeder {
  public async run () {
    // create many roles that i want to define
    await Role.createMany([
      {
        name: "Client"
      },
      {
        name: "Admin"
      },
      {
        name: "Cuisine"
      },
    ])
  }
}
