type parent = {
  id: number | string
  created_at: string
  updated_at: string
  short_description_main: string
  title_main: string
  thumbnail_main: string
  title_blog: string
  title_product: string
  title_service: string
  is_special: boolean
  seo_slug: string
  seo_title: string
  seo_description: string
  creator: string
  parent: number
  banner_main: number[]
}

export type categoryType = {
  id: number | string
  created_at: string
  updated_at: string
  short_description_main: string
  title_main: string
  thumbnail_main: string
  title_blog: string
  title_product: string
  title_service: string
  is_special: boolean
  seo_slug: string
  seo_title: string
  seo_description: string
  creator: string
  parent: parent
  banner_main: number[]
}

export type categoryList = {
  count: number
  total_pages: number | undefined
  next: boolean | null
  previous: boolean | null
  current_page: number
  results: categoryType[]
}
