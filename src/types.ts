export type Resource = {
  title: string
  slug: string
  description: string
  icon_url?: string
  completed: boolean
  path: string
}

export type LessonResource = Resource & {
  dash_url: string
  hls_url: string
  media_url: string
  lesson_view_url: string
  id: string | number
  tags: any[]
  lessons: any[]
}

export type PodcastResource = Resource & {
  duration: number
  episode_number: number
  published_at: string
  summary: string
  transcript: string
  simplecast_uid: string
  id: number
  image_url: string
  contributors: Array<string>
  url: string
  path: string
}
