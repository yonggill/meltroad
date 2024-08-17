export type Post = {
    id: number,
    category: any[],
    images: [any[]],
    title: string,
    slug: string,
    content: string,
    meta_description: string,
    meta_image: string,
    reading_minutes: number,
    date_published: string
};