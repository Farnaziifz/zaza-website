export type contractorItem = {
  id: number
  created_at: string
  updated_at: string
  title_main: string
  short_description_main: string
  description_main: string
  thumbnail_main: string
  title_blog: string
  title_service: string
  title_product: string
  is_special: boolean
  seo_slug: string
  seo_title: string
  seo_description: string
}

export type contactorList = {
  count: number
  total_pages: number | undefined
  next: boolean | null
  previous: boolean | null
  current_page: number
  results: contractorItem[]
}
