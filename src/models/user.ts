import * as Knex from 'knex';

export class UserModel {

  getUser(db: Knex, user: any) {
    let sql = db('users')
    if (user.userType == 'SUB_ADMIN') {
      sql.where('zone_code', user.zone_code)
    }
    return sql
  }

}