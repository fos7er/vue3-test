export interface specialization {
  id: number
  name: string
}

export interface doctor {
  id: number
  lastName: string
  firstName: string
  middleName: string
  specializationList: specialization[]
}
