export type contractorItem = {
  id: number
  aggregate_rate: number
  created_at: string
  updated_at: string
  father_name: string
  birth_place: string
  bio: string
  user: {
    id: number
    first_name: string
    last_name: string
    avatar?: string
  }
}

export type contactorList = {
  count: number
  total_pages: number | undefined
  next: boolean | null
  previous: boolean | null
  current_page: number
  results: contractorItem[]
}
