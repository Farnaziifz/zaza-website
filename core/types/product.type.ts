import { type creator } from './blog.type'
import type { categoryType } from './category.type'

export type brandItem = {
  id: number
  created_at: string
  updated_at: string
  title: string
  description: string
  image: string
  seo_title: string
  seo_description: string
}

export type brandList = {
  count: number
  total_pages: number | undefined
  next: boolean | null
  previous: boolean | null
  current_page: number
  results: brandItem[]
}

type price = {
  id: number
  title: string
  product_id: number
  quantity_in_stock: number
  price: number
  off_percent: number
}

type tag = {
  id: number
  created_at: string
  updated_at: string
  title: string
  seo_slug: string
  seo_title: string
  seo_description: string
}

type gallery = {
  id: number
  created_at: string
  updated_at: string
  file: string
}
type property = {
  id: number
  created_at: string
  updated_at: string
  value: string
  title: {
    title: string
  }
}
export type productItem = {
  id: number
  aggregate_rate: number
  created_at: string
  updated_at: string
  title: string
  short_description: string
  description: string
  thumbnail: string
  length: number
  width: number
  height: number
  weight: number
  is_special: boolean
  is_bestselling: boolean
  seo_slug: string
  seo_title: string
  seo_description: string
  creator: creator
  brand: brandItem
  price: price[]
  category: categoryType[]
  tag: tag[]
  gallery: gallery[]
  product_property: property[]
  first_price: {
    off_price: number
    price: number
    off_percent: number
  }
}

export type productList = {
  count: number
  total_pages: number | undefined
  next: string | null
  previous: string | null
  current_page: number
  results: productItem[]
}
export type promotedItem = {
  title: string
  thumbnail: string
  first_price: {
    off_price: number
    price: number
    off_percent: number
  }
}
export type promoted = {
  specials: promotedItem[]
  bestsellings: promotedItem[]
  sales: promotedItem[]
}
