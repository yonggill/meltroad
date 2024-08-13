"use client";
import MeltRoadLayout from "@/layout/MeltRoadLayout";
import "@css/content.css";
import MarkdownPreview from '@uiw/react-markdown-preview';
import axios from "axios";
import {useState, useEffect} from "react";

type post = {
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

export default function Page({ params }: { params: { id: number } }) {
  const [post, setPost] = useState<post>(null);
  const [colorMode, setColorMode] = useState<string>('light');

  useEffect(()=> {
    fetch(process.env.NEXT_PUBLIC_API_HOST + '/posts/' + params.id + '/')
    .then((res) => res.json())
    .then((data) => setPost(data))
  }, [])

  useEffect(()=> {
    const darkMode = JSON.parse(localStorage.getItem("darkMode") || '{}');
    if (darkMode) {
      setColorMode('dark')
    }
  }, [])

    return (
    <MeltRoadLayout>
      <div className="col-xl-9">
        <div className="card content-box-card">
          <div className="card-body portfolio-card article-details-card">
            <div className="article-details-area">
              <h1 className="mb-8">{ post?.title }</h1>
            </div>
            <MarkdownPreview
              source={post?.content}
              wrapperElement={{
                // @ts-ignore
                  "data-color-mode": colorMode || 'light'
              }}
            />
          </div>
        </div>
      </div>
    </MeltRoadLayout>
  );
};
