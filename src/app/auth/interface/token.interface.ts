import { ValidRoles } from 'src/app/common/enums/valid-roles.enum'

export interface Token {
    token: string
    user: User
  }
  
  export interface User {
    id: string
    userName: string
    isActive: boolean
    roles:ValidRoles[]
  }
