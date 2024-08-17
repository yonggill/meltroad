import MeltRoadLayout from "@/layout/MeltRoadLayout";
import { marked } from "marked";
import { Metadata } from 'next';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import "@css/viewer.css";
import { Noto_Sans_KR } from "next/font/google";
const Noto = Noto_Sans_KR({ preload: false });


type Post = {
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
} | null;

type PostProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const id = params.id;
  const url = process.env.NEXT_PUBLIC_API_HOST + '/posts/' + params.id + '/';
  const post = await fetch(url).then((res) => res.json());
  return {
    title: post.title,
    description: post.description,
  };
}


export default async function Page({ params }: PostProps) {
  const post = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/posts/' + params.id + '/').then((res) => res.json())
  const sanitizeMD = (content: string) => {
    // @ts-ignore
    return DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(marked.parse(content))
  }

  return (
    <MeltRoadLayout>
      <div className="col-xl-9">
        <div className="card content-box-card">
          <div className="card-body portfolio-card article-details-card">
            <div className={"md-contents " + Noto.className} dangerouslySetInnerHTML={{ __html: sanitizeMD(post.content) }} />
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
