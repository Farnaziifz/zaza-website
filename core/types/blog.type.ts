export type creator = {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

type category = {
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

type banner = {
  id: number
  created_at: string
  updated_at: string
  title: string
  url: string
  image: string
}

type tag = {
  id: number
  created_at: '2024-04-13T20:11:39.809171+03:30'
  updated_at: '2024-04-13T20:11:39.809286+03:30'
  title: string
  seo_slug: string
  seo_title: string
  seo_description: string
}

export type blogItem = {
  title: string
  id: number
  all_comments_count: number
  approved_comments_count: number
  not_approved_comments_count: number
  created_at: string
  updated_at: string
  body: string
  thumbnail: string
  status: string
  publish_at: string
  seo_slug: string
  seo_title: string
  seo_description: string
  creator: creator
  category: category
  parent: number
  banner: banner[]
  tag: tag[]
}

export type blogList = {
  count: number
  total_pages: number
  next: boolean
  previous: boolean
  current_page: number
  results: blogItem[]
}
