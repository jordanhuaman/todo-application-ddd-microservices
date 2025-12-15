import type { InferSelectModel } from "drizzle-orm"
import { usersTable } from "../../../shared/infraestructure/db/schema"
import type { userDto } from "./user";

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

export {userEntityToDomain}