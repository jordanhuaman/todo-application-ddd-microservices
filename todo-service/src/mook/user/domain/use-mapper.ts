import type { InferSelectModel } from "drizzle-orm"
import { usersTable } from "../../../shared/infraestructure/db/schema"
import type { userDto } from "./user";
import { v4 as uuidv4 } from "uuid";

type UserEntity = InferSelectModel<typeof usersTable>;

const userEntityToDomain = (entity: UserEntity):userDto=>{
  return {
    age: entity.age,
    createAt: entity.createAt.toISOString(),
    email: entity.email,
    id: entity.id,
    name: entity.name,
    profile: null,
    sharedInformation: null,
    status: entity.status,
  }
}

const inputtoDomain = (name: string, age:number, email: string):UserEntity=>{
  return {age, email, name, id: uuidv4(), createAt: new Date, deleted: false, status: "CREATED", updateAt: null}
}

export {userEntityToDomain, inputtoDomain}