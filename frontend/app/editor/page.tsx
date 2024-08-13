'use client';
import React from "react";
import MDEditor, { commands } from '@uiw/react-md-editor';
import { ChangeEvent, useState } from 'react';
import axios from "axios";

/* Custom button in toolbar */
const help = {
  name: 'help',
  keyCommand: 'help',
  buttonProps: { 'aria-label': 'Insert help' },
  icon: (
    <svg viewBox='0 0 16 16' width='12px' height='12px'>
      <path
        d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z'
        fill='currentColor'
      />
    </svg>
  ),
  // eslint-disable-next-line no-unused-vars
  execute: (state: any, api: any) => {
    window.open('https://www.markdownguide.org/basic-syntax/', '_blank');
  },
};
interface PostProps {
  title: string,
  category_slug: string,
  slug: string,
  meta_description: string,
  meta_image?: File,
  date_published?: string
}

export default function Page() {
  const [post, setPost] = useState<PostProps>({title:"",category_slug:"",slug:"",meta_description:""});
  const [datePublished, setDatePublished] = useState<string|undefined>("");
  const [content, setContent] = useState<string | undefined>("# 타이틀");


  const handleEditorChange = (
    value?: string | undefined,
    // eslint-disable-next-line no-unused-vars
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
  ) => {
    setContent(value);
  };
  const handlePropertyChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newState = {...post};
    let {name, value} = e.target;
    if(name == 'title' || name == 'category_slug' || name == 'meta_description' || name == 'slug' || name == 'date_published') {
      newState[name] = value;
      setPost(newState)
    }
  }
  const handleMetaDescriptionChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    let newState = {...post};
    newState['meta_description'] = e.target.value;
    setPost(newState)
  }

  const handleMetaImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newState = {...post};
    if(e.target.files && e.target.files.length) {
      newState['meta_image'] = e.target.files[0];
      setPost(newState)
    }
  }

  const submitPost = (e:React.FormEvent) => {
    e.preventDefault();
    let formData = new FormData();
    for (var key in post) {
      // @ts-ignore
        formData.append(key, post[key])
    }
    // @ts-ignore
    formData.append('content', content)
    // @ts-ignore
    formData.append('date_published', datePublished)
    axios.post('https://api.yong-yong.net/posts/', formData)
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  return (
      <div className={"col-xl-12"}>
        <div className="container">
        <div className="row g-4">
          <div className={"col-xl-3"}>
            <div className="card p-4">
              <form
                onSubmit={submitPost}
              >
                <div className="row gx-3">
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">제목</label>
                      <input
                        name="title"
                        value={post.title}
                        onChange={handlePropertyChange}
                        required
                        type="text"
                        className="form-control shadow-none"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">URL slug</label>
                      <input
                        name="slug"
                        required
                        type="text"
                        className="form-control shadow-none"
                        onChange={handlePropertyChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">카테고리</label>
                      <input
                        name="slug"
                        required
                        type="text"
                        className="form-control shadow-none"
                        onChange={handlePropertyChange}
                        placeholder={"dev, startup, eat"}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">게시일자</label>
                      <input
                        type={"text"}
                        className="form-control shadow-none"
                        name="date_published"
                        onChange={(e) => setDatePublished(e.target.value)}
                      />

                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">Meta 이미지</label>
                      <input
                        type='file'
                        accept='image/jpeg,image/jpg,image/png,image/gif'
                        name='meta_image'
                        className="form-control shadow-none"
                        onChange={handleMetaImageChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">Meta Description</label>
                      <textarea
                        name="meta_description"
                        className="form-control shadow-none"
                        onChange={handleMetaDescriptionChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="submit-btn btn-md" type="submit">
                      저장
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={"col-xl-9"}>
            
              <MDEditor
                  className={""}
                  value={content}
                  fullscreen={false}
                  onChange={handleEditorChange}
                  commands={[...commands.getCommands(), help]}
              />
            
          </div>
        </div>
        </div>
      </div>
  );
}