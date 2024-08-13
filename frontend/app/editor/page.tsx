'use client';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { ChangeEvent, useState } from 'react';

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

export default function Page() {
  const [value, setValue] = useState<string | undefined>('# 타이틀');

  const handleChange = (
    value?: string | undefined,
    // eslint-disable-next-line no-unused-vars
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
  ) => {
    setValue(value);
  };

  return (
      <div className={"col-xl-12"}>
        <div className="container">
        <div className="row g-4">
          <div className={"col-xl-3"}>
            <div className="card p-4">
              <form
                id="contact-form"
                action="https://api.yong-yong.net/contact/"
                method="POST"
              >
                <div className="row gx-3">
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">Name</label>
                      <input
                        name="name"
                        required
                        type="text"
                        className="form-control shadow-none"
                        placeholder="성함을 넣어주세요."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control shadow-none"
                        placeholder="이메일 주소를 넣어주세요."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="submit-btn" type="submit">
                      Send Message
                      <svg
                        className="icon"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 11.6665V6.6665H12.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={"col-xl-9"}>
            
              <MDEditor
                  className={""}
                  value={value}
                  fullscreen={false}
                  onChange={handleChange}
                  commands={[...commands.getCommands(), help]}
              />
            
          </div>
        </div>
        </div>
      </div>
  );
}