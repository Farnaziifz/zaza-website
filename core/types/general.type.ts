export type faqItem = {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
}

export type faqList = {
  count: number
  total_pages: number | undefined
  next: boolean | null
  previous: boolean | null
  current_page: number
  results: faqItem[]
}
